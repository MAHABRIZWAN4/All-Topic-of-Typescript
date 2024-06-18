// Call Back


function hello(Callback:any){
      Callback("Mahab")
}

let arrowfunc = (name:string) => {
    console.log(`Hello ${name}`);
    
}

hello(arrowfunc)

/*

function hello(Callback:any,NewName:string){
    Callback(NewName)
}

let arrowfunc = (name:string) => {
  console.log(`Hello ${name}`);
  
}

hello(arrowfunc,"Mahab")



*/


// Higher order function 
function one(call_back: () => void ){
  console.log("ONE");
  const abc =  setTimeout(() => {
    console.log("AFTER 5 SECONDS");
    call_back()
  }, 5000);
  console.log(3);
  
  
}


function two(){
  console.log("I AM CALL BACK");
}
one(two)
