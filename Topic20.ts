// Promise 
// resolve,reject
// if resolve.then
// error reject.catch

// Theory about promise
/* promise object properties
A javascript promise can be:

1.pending .
2.fulfilled(resolve)
3.Rejected

The promise object support two properties:state and result

While a object promise is pending (working) the result is undefined.
While a object promise is fulfilled(resolved) the result is value.
While a object promise is reject the result is an error object.
*/

//  EXAMPLE 1
function pro() {
    console.log("pending");
    
    return new Promise((resolve, reject) => {
        const mis = false
        if (mis) {
           setTimeout(() => {
            resolve("I am Resolve")
           }, 3000);
        } else {
            setTimeout(() => {
                reject("ERROR")
            }, 3000);
        }
    })
}
pro().then((res) => {
    console.log(res)
}).catch((errr) => {
    console.log(errr);
})


// EXAMPLE 2

function student_data(){

    return new Promise((hogaya,nahihoya) =>{
        console.log("Your Answer is in Pending!!!!!!!!!!!!!!!JUST WAIT AND WATCH!!!!!!!!!!!!!!!!");
        
        const condition =  true;
        if(condition){
            setTimeout(() => {
                console.log("Student_Name: Dua");
                console.log("Father_Name: Muhammad Rizwan");
                console.log("Class: 5th");
                console.log("Roll_No: 43")
            },3000)
        }
        else{
            setTimeout(() => {
                console.log("ERROR.....ERROR.....ERROR.....ERROR.....ERROR.....ERROR");
                
            })
        }
    })
}

student_data().then( (han) => {
       console.log(han);
       
} ).catch((na) => {
    console.log(na);
    
})