//Suppose there is a coffee shop that only takes order for a coffee

// Creating a Promise for accepting the order
function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink.toLowerCase()==='coffee'){
            resolve('Order for Coffee Recieved')
        }
        else{
            reject('Other orders Rejected')
        }
    })
}

//Promise for waiting time for processing the order
function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`${order} is served`)
    })
}

// Using then, catch, finally to use Promises
// we used sequencial execution of asyc functions(placeOrder -> processOrder) here and function chaining
placeOrder('Coffee').then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
}).then(function(orderProcessed){
    console.log(orderProcessed)
}).catch(function(orderRejected){
    console.log(orderRejected)
}).finally(()=>{
    console.log("Order Finished")
})// Promise chaining