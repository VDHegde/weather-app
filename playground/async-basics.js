console.log('start');

setTimeout(() => {
    console.log('inside callback');
}, 2000)

setTimeout(() => {
    console.log('inside 2nd callback');
}, 0)

console.log('end');