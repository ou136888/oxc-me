# Deploy to GitHub Pages for `oxc.me`

This project is prepared as a static GitHub Pages site.

## Files already prepared

- `CNAME` is set to `oxc.me`
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

## 4. Set the custom domain

In the same `Pages` settings:

1. Enter `oxc.me` in `Custom domain`
2. Save
3. Enable `Enforce HTTPS` after DNS becomes valid

## 5. Configure DNS for `oxc.me`

At your domain provider, point the apex domain `oxc.me` to GitHub Pages with these `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional but recommended:

- Add `CNAME` for `www` -> `YOUR_GITHUB_NAME.github.io`

## 6. Verify the domain in GitHub

Recommended by GitHub for security:

1. Open GitHub `Settings`
2. Open `Pages`
3. Open domain verification
4. Verify `oxc.me`

## 7. Wait for publish

Usually a few minutes after push + DNS propagation.

Final URLs:

- `https://oxc.me`
- optionally `https://www.oxc.me`

## Notes

- The repository must be public on GitHub Free for Pages.
- Local video files are included and will be served as static assets.
