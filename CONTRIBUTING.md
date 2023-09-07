# Contribution

When contributing to this repository, first discuss the change you want to make via an Issue,
email or any other method with the owners of this repository before making a change.

Note that we have a [code of conduct](CODE-OF-CONDUCT.md), follow it in all your interactions with the project.

## Pull Request Process

1.  Complete the PULL_REQUEST template completely

## Vscode extensions for this project

| Extension                 | Description                     | Author       |
| ------------------------- | ------------------------------- | ------------ |
| Eslint                    | For linting code                | Microsoft    |
| Prettier - Code formatter | For beautifully formate code    | Prettier     |
| Prettier Eslint           | Integration prettier and eslint | Rebecca Vest |

### How to contribute in practice

1.  Fork the project.
2.  Clone the project on your machine

```shell
git clone <your-repository-forked>
```

3.  Access the Development Branch

```shell
git checkout -b dev origin/dev
```

4.  Update the development branch always

```shell
git pull
```

5.  Create a new branch based on dev by following one of the options below:

```shell
# New Branch, to docs, refactoring, add tests, fix bug, etc.
# Replace 'dark-theme-button' with the name
git checkout -b feat/dark-theme-button
```

6.  Create the features/fixes
7.  Add tests
8.  Add and commit the modified files using [commitlint](https://github.com/conventional-changelog/commitlint) rules, example:

```shell
git add file.js src/
git commit -m "feat: added a color swap button"
```

9.  Do a push with the name of the branch you created

```shell
git push -u origin feature/name-branch
```

10. Open your github and create a pull request
11. Point the pull request to merge in the 'dev' branch of this project (gabrielogregorio/project)
12. Create the pull request
13. Follow the discussion, and everything works out, your contribution will be merged into the project's dev branch
