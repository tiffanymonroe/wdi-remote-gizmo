## [Github Walkthrough](https://help.github.com/articles/creating-project-pages-manually/)

```
$ cd your_repository

$ git status

# add and commit and push to origin master to save all your current work
```

```
$ git checkout --orphan gh-pages
# Creates our branch, without any parents (it's an orphan!)
Switched to a new branch 'gh-pages'
```

[For more info on orphan branches](https://gist.github.com/ColinTheRobot/9c22a8205bb42509d9dc11e6fd06eccf)

Next, git add, git commit, and `git push origin gh-pages`:

```
$ git add .
$ git commit -a -m "First pages commit"
$ git push origin gh-pages
```



Your project should now be available at:

`http(s)://<username>.github.io/<projectname>`

switch back to your master branch to keep working

```
$ git checkout master
```

## Pushing new changes. 

When you're coding, you'll want to be working in your dev or master branch. 

To deploy new changes make sure you're on the branch that holds your code by running git branch

```
$ git branch
    gh-pages
  * master

# this should show you the available branches with an * next to the branch you're currently in
```

add and commit and push your changes to your working branch

```
$ git add .
$ git commit -m "message"
$ git push origin master
$ git status # to make sure you added/committed/pushed all content
```

Switch branches to `gh-pages` using the checkout command: 

```
$ git checkout gh-pages

$ git branch
  * gh-pages
    master

# this should show you the available branches with an * next to the branch you're currently in
```

Now you need to merge your changes (commits) from your working branch, in this case `master`, to gh-pages:

```
$ git merge master
```

This command will take the commits that exist on the branch `master` and merge them into the current branch, in this case `gh-pages`. It's kind of like a local git pull, instead of pulling from GitHub we're just pulling from a local branch. 

SIDENOTE: In fact, the command `git pull` runs two git commands: `git fetch` which, fetches the code from the remote (origin/upstream) and branch (master) specified and then runs `git merge` to merge that code into the current working branch. 

After merging master into gh-pages, you are free to push to gh-pages 

```
$ git push origin gh-pages
```

and then checkout back into the `master` branch where you're writing code.