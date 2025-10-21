#!/usr/bin/env python3
"""
Extract all CSS classes from governance.html and check against unified.css
"""

import re
import os

def extract_classes_from_html(file_path):
    """Extract all CSS classes from HTML file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all class attributes
    class_pattern = r'class="([^"]*)"'
    matches = re.findall(class_pattern, content)
    
    # Split classes and flatten
    all_classes = []
    for match in matches:
        classes = match.split()
        all_classes.extend(classes)
    
    return set(all_classes)

def extract_classes_from_css(file_path):
    """Extract all CSS class selectors from CSS file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all class selectors (including responsive variants)
    # Updated pattern to handle escaped characters and responsive prefixes
    class_pattern = r'\.([a-zA-Z0-9_-]+(?:\:[a-zA-Z0-9_-]+)*(?:\\[a-zA-Z0-9_-]+)*)'
    matches = re.findall(class_pattern, content)
    
    # Clean up escaped characters
    cleaned_classes = []
    for match in matches:
        # Replace escaped characters
        cleaned = match.replace('\\/', '/').replace('\\:', ':')
        cleaned_classes.append(cleaned)
    
    return set(cleaned_classes)

def main():
    # Extract classes from governance.html
    html_classes = extract_classes_from_html('governance.html')
    print(f"Classes used in governance.html: {len(html_classes)}")
    
    # Extract classes from unified.css
    css_classes = extract_classes_from_css('assets/css/unified.css')
    print(f"Classes defined in unified.css: {len(css_classes)}")
    
    # Find missing classes
    missing_classes = html_classes - css_classes
    print(f"\nMissing classes ({len(missing_classes)}):")
    for cls in sorted(missing_classes):
        print(f"  - {cls}")
    
    # Find extra classes (defined but not used)
    extra_classes = css_classes - html_classes
    print(f"\nExtra classes ({len(extra_classes)}):")
    for cls in sorted(list(extra_classes)[:20]):  # Show first 20
        print(f"  - {cls}")
    if len(extra_classes) > 20:
        print(f"  ... and {len(extra_classes) - 20} more")

if __name__ == "__main__":
    main()
