# bash-ls

bash command `ls` in pure javascript

### Installation

```bash
$ npm install -g bash-ls
```

### Command Line

Run on Terminal

```bash
$ ls .
```

Output:

```js
[
    "bin.js",
    "index.js",
    "node_modules",
    "package.json",
    "README.md",
    "test"
]
```

### API

```js
var ls = require('bash-ls');
ls('./', function(er, list) {
  // here you could get a files list of the current directory
})
```

### Support Options

* `-A`, `almost-all`: do not list implied . and ..

* `-a`, `--all`: do not ignore entries starting with .

* `-B`, `--ignore-backups`: do not list implied entries ending with ~

### LICENSE

MIT
