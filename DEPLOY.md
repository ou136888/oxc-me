# Deploy to GitHub Pages

This project is prepared as a static GitHub Pages site.

## Files already prepared

- `.nojekyll` is present so GitHub Pages serves files directly

## 1. Create a GitHub repository

Create a new public repository in your GitHub account.

Recommended name:

- `oxc-me`

## 2. Initialize and push from local terminal

Run these commands in `D:\vscodej\demo2` after replacing `YOUR_GITHUB_NAME`:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial site for oxc.me"
git remote add origin https://github.com/YOUR_GITHUB_NAME/oxc-me.git
git push -u origin main
```

## 3. Enable GitHub Pages

In the GitHub repository:

1. Open `Settings`
2. Open `Pages`
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save

## 4. Wait for publish

Usually a few minutes after push.

Final URL:

- `https://YOUR_GITHUB_NAME.github.io/REPOSITORY_NAME/`

For this repository, the live URL is:

- `https://ou136888.github.io/oxc-me/`

## Notes

- The repository must be public on GitHub Free for Pages.
- Local video files are included and will be served as static assets.
