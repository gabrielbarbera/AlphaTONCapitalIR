# GitHub Action Setup for Automated Sync

## 🔑 Required Setup: Personal Access Token

To enable automated syncing from the main repository to the dist repository, you need to create a Personal Access Token.

### Step 1: Create Personal Access Token

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token** → **Generate new token (classic)**
3. **Note**: `AlphaTONCapitalIR-dist-sync`
4. **Expiration**: Choose appropriate duration (recommend 1 year)
5. **Scopes**: Select these permissions:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)

### Step 2: Add Token to Repository Secrets

1. Go to your main repository: `https://github.com/gabrielbarbera/AlphaTONCapitalIR`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. **Name**: `DIST_REPO_TOKEN`
5. **Secret**: Paste the token you created
6. Click **Add secret**

### Step 3: Verify Setup

The GitHub Action will automatically run on the next push to the main branch. You can also trigger it manually:

1. Go to **Actions** tab in your main repository
2. Find "Sync Production Build to Dist Repository"
3. Click **Run workflow**

## 🔄 How It Works

1. **Trigger**: Every push to `main` branch
2. **Build**: Runs `npm run build:production`
3. **Sync**: Copies `dist/` contents to dist repository
4. **Commit**: Creates commit with timestamp
5. **Push**: Updates the dist repository

## 🛠️ Manual Sync (Alternative)

If you prefer manual control, use the provided batch script:

```bash
# Run from main repository directory
sync-dist.bat
```

This will:
1. Build production version
2. Sync to dist repository
3. Commit and push changes

## 📋 Troubleshooting

### Token Issues
- Ensure token has `repo` and `workflow` permissions
- Check token hasn't expired
- Verify secret name is exactly `DIST_REPO_TOKEN`

### Permission Issues
- Ensure you have write access to both repositories
- Check repository visibility settings
- Verify GitHub Actions are enabled

### Sync Issues
- Check GitHub Actions logs for errors
- Ensure dist repository exists and is accessible
- Verify branch names match (`main`)

## 🔒 Security Notes

- Token is stored as encrypted secret
- Only accessible to repository workflows
- Can be revoked anytime from GitHub settings
- No sensitive data is exposed in logs

