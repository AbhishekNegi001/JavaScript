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

// Using async await for promises

//async always works with the function
//async makes execution of a function asyncronous 
//and await wait for the execution of the function
async function serveOrder(){
    try{
        let orderPlaced = placeOrder('Coffee')
        console.log(orderPlaced)
        orderPlaced = await placeOrder('Coffee')
        console.log(orderPlaced)

        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log('Order Finished')
    }
}

serveOrder()