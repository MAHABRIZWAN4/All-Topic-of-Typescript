// SYNCHRONOUS PROGRAMMING ===> 
/* Synchronus programming mein, ek program ke instructions sequential order mein execute hote hain, ek ke baad ek. Matlab, ek instruction complete hone ke baad hi doosri instruction execute hoti hai. Jab tak ek kaam poora nahi ho jata, agla kaam shuru nahi hota.*/

function FirstTask(){
    console.log("First task Complete");
    
}

function SecondTask(){
    console.log("Second task Complete");
}
FirstTask()
SecondTask()

/* is example mein, pehle firstTask() function execute hoga aur "First task complete" console pe print hoga. Uske baad hi secondTask() function execute hoga aur "Second task complete" print hoga. Ek ke baad ek instructions execute hoti hain, isi ko synchronous programming kehte hain.
*/
// Hamari code line by line run ho wo Synchronous Programming hoti he.

// synchronous programming call stack me kaam kerta he.

