'use strict';

before(function() {
  return new Promise(resolve => {
    console.log('Preparing ...');
    setTimeout(() => {
      console.log('... prepared!');
      resolve();
    }, 1000);
  });
});

after(function() {
  return new Promise(resolve => {
    console.log('Unpreparing ...');
    setTimeout(() => {
      console.log('... unprepared!');
      resolve();
    }, 1000);
  });
});
