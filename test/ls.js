var test = require('tape');
var type = require('component-type');
var ls = require('../');

test('ls --all', function(t) {
  t.plan(3);
  ls('./', '--all', function(err, list) {
    t.equal(!err, true, "must have no error");
    t.equal(type(list) === 'array', true);
    t.equal(list && list.length > 0, true);
    console.log(list);
  });
})