# Getting started

```
cd
cd xxxxx/xxxxx

git init

wget https://github.com/nrshimanuki/html-template/archive/main.zip -P ./
unzip main.zip
rm -r main.zip
mv html-template-main dist

git add --all
git commit -m 'first commit'
git branch -M main
git remote add origin https://github.com/nrshimanuki/html-template.git
git push -u origin main

cd dist/src

npm install
gulp
```


## Check Packages

* [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```
npm install -g npm-check-updates

npm-check-updates
<!-- or -->
ncu

ncu -u
npm update
```
