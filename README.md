# bash-ls

bash command `ls` in pure javascript

### Installation

```bash
$ npm instal -g bash-ls
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
