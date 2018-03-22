echo "# backup" >> README.md
git init
git add --all
git commit -m "first commit"
git remote add origin https://github.com/durai145/backup.git
git push -u origin master
