function addPromise(a, b) {
  return new Promise(function(reslove, reject){
    if(typeof a !== 'number' || typeof b !== 'number') {
      reject('a or b is not a nubmer');
    }

    reslove(a + b);
  });
}

addPromise(1, 2).then(function(result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise error', err);
});

addPromise(1, '2').then(function(result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise error', err);
});
