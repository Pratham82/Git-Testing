
# Git commands

## Config
### Configure username.
### `git config -- global user.name 'Pratham82'`
### Configure user email.
### `git config --global user.email 'mali.prathamesh82@gmail.com`

## Initialize a repo
### Initialize local directory
### `git init       `                         

### Adds the file mentioned in the local repository and stages them for commit.
### `git add 'File name' `                   

### Adds all the files in the local repository and stages them for commit.
### `git add . `         
                       
### Reset all the changed done beofre git add
### `git reset `

### To remove the staged file
### `git rm --cached "File name"`

### Commits the tracked changes and prepares them to be pushed to a remote repository.
### `git commit-m "Commit message"`       

### To remove this commit and modify the file, and commit and add the file again.     
 ###  `git reset  --soft HEAD~1`    
 
 ### Check the status of repo
### `git status`

### Adding the link of our remote repo 
### `git remote add origin 'Link of the remote repo'` 

###  Verifief the new remote URL
### `git remote -v`                            
 
### Pushes the changes in your local repository up to the remote repository you specified as the origin
### `git push -u origin master` 

### Forcibly pushes the commited file to the remote repo        
### `git push -f origin master `    
        
### Any filename or extension added to this file will be ingnored from staging
### ` .gitignore `                              

### Set upstream branch
### `git push --set-upstream origin master`

## Branches

### Creating new branch name
### `git branch new-branch `

### Checkout branch
### `git checkout new-branch`

### Condense the above two commands
### `git checkout -b new-branch`
