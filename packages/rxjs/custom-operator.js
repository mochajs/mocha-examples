const { map, throttleTime } = require('rxjs/operators');

const getNames = (source) => source.pipe(map(value => value.name));

const throttleTimeForThreeMs = (source) => source.pipe(throttleTime(3));

module.exports = {
  getNames,
  throttleTimeForThreeMs
}
