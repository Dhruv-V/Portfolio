# 🚀 Deploy with gh-pages Command

## ⚡ Quick Deploy

### **Manual Deployment** (Anytime)

```bash
pnpm run deploy
```

That's it! Your site will be live in 2-3 minutes at:
**https://dhruv-v.github.io/Portfolio**

---

## 🔄 Automatic Deployment (On Push to Main)

I've configured GitHub Actions to use your `pnpm run deploy` command.

### **What Happens:**

```
You push to main
      ↓
GitHub Actions runs
      ↓
Executes: pnpm run deploy
      ↓
Site is live! 🎉
```

---

## 📝 First Time Setup

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. **Settings** → **Pages**
3. Under **Source**:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
4. Click **Save**

### 2. Deploy

```bash
pnpm run deploy
```

### 3. Verify

Wait 2-3 minutes, then visit:

```
https://dhruv-v.github.io/Portfolio
```

---

## 🎯 Two Ways to Deploy

### **Option 1: Manual** (When you want)

```bash
# Build and deploy
pnpm run deploy
```

### **Option 2: Automatic** (Every push to main)

```bash
# Just push your code
git add .
git commit -m "Update portfolio"
git push origin main

# GitHub Actions automatically runs: pnpm run deploy
```

---

## 🔧 How It Works

Your `package.json` has:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.2.0"
  }
}
```

When you run `pnpm run deploy`:

1. ✅ `predeploy` runs first (builds your app)
2. ✅ `deploy` runs (pushes build folder to gh-pages branch)
3. ✅ GitHub Pages serves from gh-pages branch
4. ✅ Site is live!

---

## 📊 Deployment Status

Check deployment status:

- **GitHub Actions:** Go to **Actions** tab in your repo
- **GitHub Pages:** Go to **Settings** → **Pages**

---

## 🐛 Troubleshooting

### **Deploy command not found?**

```bash
# Reinstall dependencies
pnpm install
```

### **Build fails?**

```bash
# Test build locally first
pnpm run build
```

### **gh-pages not found?**

```bash
# Install gh-pages
pnpm add -D gh-pages
```

### **Site shows 404?**

1. Check `homepage` in `package.json`:
   ```json
   "homepage": "https://dhruv-v.github.io/Portfolio"
   ```
2. Ensure it matches your GitHub username and repo name

### **Changes not showing?**

- Wait 2-3 minutes after deployment
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Check if gh-pages branch was updated

---

## ✅ Deployment Checklist

Before deploying:

- [ ] All changes committed
- [ ] Build works locally: `pnpm run build`
- [ ] No TypeScript errors
- [ ] Images are in `public/` folder
- [ ] `homepage` in package.json is correct

Then:

```bash
pnpm run deploy
```

---

## 🎉 Success!

Your portfolio is now live at:
**https://dhruv-v.github.io/Portfolio**

Every time you push to main, it automatically redeploys! 🚀

---

## 💡 Pro Tips

1. **Test locally before deploying**

   ```bash
   pnpm run build
   npx serve -s build
   ```

2. **Deploy only when ready**

   ```bash
   # Work on feature branch
   git checkout -b feature/new-section

   # When ready, merge to main
   git checkout main
   git merge feature/new-section
   git push origin main

   # Auto-deploys!
   ```

3. **Check deployment logs**
   - Go to **Actions** tab
   - Click on latest workflow run
   - See detailed logs

---

**Happy Deploying! 🎉**
