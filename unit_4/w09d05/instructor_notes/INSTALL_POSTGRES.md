# Install Postgres

Update brew

```
$ brew update
```

Install postgresql

```
$ brew install postgresql
```

Configure postgres server to run automatically

```
$ mkdir -p ~/Library/LaunchAgents
```

```
$ ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
```

```
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

Create user

```
$ createdb `whoami`
```

Access postgres

```
$ psql
```

Quit

```
\q
```



<br>



### Additional resources

[Installing postgres with brew](http://exponential.io/blog/2015/02/21/install-postgresql-on-mac-os-x-via-brew/)

[Another install of postgres with brew](https://gist.github.com/sgnl/609557ebacd3378f3b72)


[Installing rbenv, ruby, rails, and postgres]([Installing rbenv, ruby, rails, and postgres](https://gorails.com/setup/osx/10.12-sierra))