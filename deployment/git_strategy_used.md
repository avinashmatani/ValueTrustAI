Here is the step-by-step technical guide to executing the Soft Fork strategy. This workflow keeps your history clean and makes it easier to spot exactly where your code diverges from the original.

Phase 1: The One-Time Setup
This connects your local machine to both your fork (where you write code) and the original repository (where updates come from).

1. Fork and Clone

Go to the original repository on GitHub/GitLab and click Fork.

Clone your fork to your machine (replace with your URL):

```Bash
git clone https://github.com/YOUR-USERNAME/repo-name.git
cd repo-name
```
2. Add the "Upstream" Remote You need a specific link to the original repo to pull down their future updates.

Find the URL of the original repository.

Add it as a remote named upstream:

```Bash
git remote add upstream https://github.com/ORIGINAL-OWNER/repo-name.git
```
Verify it: Type git remote -v. You should see origin (your fork) and upstream (the original).

3. Create Your "Platform" Branch Never commit directly to main. Keep main distinct as a clean mirror of the original project.

Create and switch to a new branch for your specific changes:

```Bash
git checkout -b my-platform-custom
```
Make your code changes here, commit them, and push to your fork:

```Bash
git add .
git commit -m "Customized login logic for my platform"
git push origin my-platform-custom
```

Phase 2: The Routine Maintenance (The "Sync")
Perform this routine weekly or whenever the original project releases a new version.

1. Fetch the latest original code Download the new data from the upstream repo without merging it yet.

```Bash
git fetch upstream
```
2. Update your local main Switch to your main branch and sync it with the original. This ensures your main is an exact copy of their main.

```Bash
git checkout main
git merge upstream/main
git push origin main
```
(Now your local main and your GitHub fork's main are up to date with the original creator.)

3. Rebase your custom branch This is the magic step. You are picking up your custom commits and "replaying" them on top of the new code you just downloaded.

```Bash
git checkout my-platform-custom
git rebase main
```
4. The "Maintenance Tax" (Conflict Resolution) If the original author changed login.py and you also changed login.py, Git will stop and ask you to choose which code wins.

Open the conflicted files in your editor (VS Code, etc.).

Decide which lines to keep.

After saving the fixes:

```Bash
git add login.py
git rebase --continue
```
5. Force Push Because rebasing rewrites history (it changes the ID of your commits), standard pushing will fail. You must force push to your fork.

```Bash
git push --force origin my-platform-custom
```
Why use Rebase instead of Merge here?
If you just used git merge, your history would become a "spaghetti" graph of crisscrossing lines every time you updated.

Rebasing keeps your history linear. It looks like: [Original Project History] -> [Your Custom Changes]

This makes it incredibly easy to see exactly what you have changed if you ever need to debug issues later.

Would you like an example of a .gitattributes file to help protect specific config files from being overwritten during these merges?