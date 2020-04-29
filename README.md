
# Git commands

## Config
### Configure username.
### `git config -- global user.name 'Username'`
### Configure user email.
### `git config --global user.email 'email'`

## Initialize a repo
### Initialize local directory
### `git init       `                         

## Addd and staging
### Adds the file mentioned in the local repository and stages them for commit.
### `git add 'File name' `                   

### Adds all the files in the local repository and stages them for commit.
### `git add . `         
                       
### Reset all the changed done before git add
### `git reset `

### To remove the staged file
### `git rm --cached "File name"`

## Commits
### Commits the tracked changes and prepares them to be pushed to a remote repository.
### `git commit -m "Commit message"`       

### Add and commit the files simultaneously.
### `git commit -am "Commit message"`       

## Reset
### To remove this commit and modify the file, and commit and add the file again.     
 ###  `git reset  --soft HEAD~1`    

### To go back to the that specific version of commit    
 ###  `git reset  --hard <commit>`    

### To go back to the that original version of remote repo from where its pulled.    
 ###  `git reset  --hard origin/master`    

## Status and logs
 ### Check the status of repo
### `git status`

## Git logs

### Check all the changes and logs in the repo.
### `git log`

### Check all the changes and logs in the repo.
### `git reflog`

### Check specific number of logs the changes and logs in the repo.
### `git log -n`

## Working with remote repo
### Adding the link of our remote repo 
### `git remote add origin 'Link of the remote repo'` 

###  Verify the new remote URL
### `git remote -v`                            
 
 ## Push 
### Pushes the changes in your local repository up to the remote repository you specified as the origin
### `git push -u origin master` 

### Forcibly pushes the commits to the remote repo        
### `git push -f origin master `    
        
### Set upstream branch
### `git push --set-upstream origin master`

## Gitignore 
### Any filename or extension added to this file will be ignored from staging
### ` .gitignore `  

## Branches

### Creating new branch name
### `git branch new-branch `

### Checkout branch
### `git checkout new-branch`

### Condense the above two commands
### `git checkout -b new-branch`
