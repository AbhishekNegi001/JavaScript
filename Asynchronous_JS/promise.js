/**
 * Phases of promises in javascript
 * 1. Pending State
 * 2. Fulfilled State
 * 3. Rejected State
 * 4. Settled State (promise finished - either fulfilled or rejected)
 */

// resolve and rejecte are both callback functions 
// which will be called based on promise will be fullfilled or not
let myPromise = new Promise(function(resolve, reject){
    const a = 4
    const b = 5

    setTimeout( ()=>{
        if(a===b){
            resolve('The values are equal , Promise is fulfilled')
        }
        else{
            reject('The values are not equal, Promise is Rejected')
        }
    }, 2000)
})

console.log(myPromise) //pending state

// fulfilled - 'then' method
// if the promise is resolve 
// then the resolve function will send the data to this 'then' function inside result
myPromise.then(function(result){
    console.log(result)
})

// fulfilled - 'catch' method
// if the promise is not resolved therefore rejected,
// reject function will send the data to the 'catch' function inside result
myPromise.catch(function(failedResult){
    console.log(failedResult)
})

myPromise.finally(()=>{
    console.log('Promise is settled')
})