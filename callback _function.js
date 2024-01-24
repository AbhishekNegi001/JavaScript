// functions in javascript are considered as objects
// hence functions can be passed as a arguments in another function

function first_name(fname, call_back){
    console.log(`Name : ${fname}`)
    call_back('Negi')
}
function last_name(lname){
    console.log(`Surname: ${lname}`)
}

first_name("Abhishek", last_name) // last_name is callbcak function