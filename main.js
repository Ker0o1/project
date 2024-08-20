function sum(a, b) {
    return a + b;
    
}

function sendingEmailTo(name){
     return `
        Hi, fatma 
        Thank you for sjoining us. We're glad to have you on board.
        
        you now have verifcation code is only valid for the next 3 minutes
        
        fa324
      
       Thanks,
        john
        `

}
function isEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    
}}
 



     module.exports ={
    sum,
    sendingEmailTo,
    isEven

}