# passive voice

npm module for detecting weasel words.

Based on this [shell script](http://matt.might.net/articles/shell-scripts-for-weasel-words-weasel-words-duplicates/).


## Install

```shell
npm install weasel-words
```


## Use

```javascript
var weasel = require('weasel-words');

var problems = weasel('Remarkably few developers write well.');
// problems -> [{ index : 0, offset : 10 },
//              { index : 11, offset : 3 }]
```


## License
MIT
