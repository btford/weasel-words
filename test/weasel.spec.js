var weasel = require('../weasel');

describe('weasel', function () {

  it('should detect weasel words', function () {
    expect(weasel('Remarkably few developers write well.')).toEqual([
      { index : 0, offset : 10 },
      { index : 11, offset : 3 }
    ]);
  });

});
