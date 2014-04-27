var weasels = [
  'many',
  'various',
  'very',
  'fairly',
  'several',
  'extremely',
  'exceedingly',
  'quite',
  'remarkably',
  'few',
  'surprisingly',
  'mostly',
  'largely',
  'huge',
  'tiny',
  'is a number',
  'are a number',
  'excellent',
  'interestingly',
  'significantly',
  'substantially',
  'clearly',
  'vast',
  'relatively',
  'completely'
];

var re = new RegExp('\\b(' + weasels.join('|') + ')\\b', 'gi');

module.exports = function (text, opts) {
  var suggestions = [];
  while (match = re.exec(text)) {
    suggestions.push({
      index: match.index,
      offset: match[0].length,
    });
  }
  return suggestions;
};
