# Installing git

If git is not installed on your machine you can easily do so by trying to run it from the command line
```sh
git
```
If you have `xcode` installed it will automatically pull up an installation procedure for you to follow. 

# Initial git setup

Now you have to setup a few important system wide settings which you will only do once. Git needs your name and email address which you can set with the following commands, where you need to put in your own information.

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

You also need to tell git what is your editor of choice. If you are using Atom you need to execute the following command. For any other editor replace `atom` with the name of your executable (i.e. `subl`).

```sh
git config --global core.editor atom
```

# Setting up your bash prompt for use with git

You will be using the branching functionality of git constantly. It is useful to setup your terminal prompt to display the current branch for your repos, so that you do not lose track of what you are working on. There are many ways in which you can set this up, what follows is only one example. Git provides us with a useful script which will handle the branch detection. To get that script execute the following command in your terminal

```sh
curl -o ~/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
```

The next step is to load the file every time you start a new terminal session. This is done by modifying your `.bash_profile` file. You can do so by executing

```sh
echo 'source ~/.git-prompt.sh' >> ~/.bash_profile
```

A useful option is to have your prompt display if you have a *dirty state*, which is any non-staged or non-committed changes. This is done by setting an environment variable like so

```sh
echo 'export GIT_PS1_SHOWDIRTYSTATE=1' >> ~/.bash_profile
```

The actual configuration of your prompt is done through an environment variable called `PS1`. The above inclusion of the git-prompt script gives us access to an environment variable called `__git_ps1` which evaluates to the current branch if you are in a git controlled directory, so you can use that when setting your `PS1` variable in your bash profile. The following command will set your prompt to a very basic configuration which will include your branch name and a flag for a dirty state

```sh
echo 'PS1=\'[\u@\h \W$(__git_ps1 " (%s)")]\$ \' ' >> ~/.bash_profile
```

The last useful thing you will want to setup is auto complete in git. This can be done easily by getting an auto completion script for the official git repo and sourcing it in your bash profile like so

```sh
curl -o ~/.git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
echo 'source ~/.git-completion.bash' >> ~/.bash_profile
```

# Setting up Github
By now you should all have your Github accounts setup. Since you will be using github constantly it is useful to setup authentication with ssh keys instead of manually entering your user name and password every time you need to push or pull. Github has a great tutorial on how to set up you machine to **use ssh keys with github**. Practice doing some research and find out how to do this. 

HINT: You can check if you've done the setup correctly by running the following in your terminal
```sh
ssh -T git@github.com
```
You should get a friendly response from github which looks like so: *Hi username! You've successfully authenticated, but GitHub does not provide shell access.*

# Setting up your class resources
Now you will need to setup your class repository. First create the directory you are going to be working in. A good practice is to have a `dev` directory in your home directory, which will hold all your development projects. The repo is going to live inside a directory which you can name `bowie` for example. 

```sh
mkdir -p ~/dev/bowie/
cd ~/dev/bowie
```

Now that you are located inside your class directory you need to tell git that this is going to be a git controlled project.

```sh
git init
```

The class repo is called [wdi-nyc-bowie_students](https://github.com/ga-students/wdi-nyc-bowie_students/). This will be your upstream remote. To add it execute

```sh
git remote add upstream git@github.com:ga-students/wdi-nyc-bowie_students.git
```

In order to get all the current resources you will need to **pull** from the **remote** upstream.

```sh
git pull upstream master
```

The work you do on your own is going to be part of your own fork of the class repo. Use the github website to fork the class repo. That will give you access to your own fork located at `https://github.com/<your-github-username>/wdi-nyc-bowie_students`. This repo is distinct from the class repo in ga-students. You will connect that to your `origin` remote on your local machine. 

```sh
git remote add origin git@github.com:<your-github-username>/wdi-nyc-bowie_students.git
```

Check that you have origin and upstream connected to the right places by running

```sh
git remote -v
```

The usual workflow we will follow is that we will push assignments and course content in the class repo. You can get that content git `git pull upstream master`. Any work you do, you will have to add `git add .` and commit `git commit -m 'some commit message'` and finally push in your own fork `git push origin master`. 

Original source: wdi-nyc-bowie_students (Peter Petrov 2016)