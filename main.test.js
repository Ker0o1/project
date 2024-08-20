
const{sum,sendingEmailTo,isEven,Require,calculate} =require("../main"); 
test("sum - should return 1+3 = 4 ", function(){
    expect(sum(1,3)).toBe(4);
})
test("sum - should return 1+3 > 4 ", function(){
    expect(sum(1,3)).toBeGreaterThan(2);
})

test("sum - should return 1+3 => 4 ", function(){
    expect(sum(1,3)).toBeGreaterThanOrEqual(4);
})
test("sum - should return 0.1+0.2 = 0.3 ", function(){
    expect(sum(0.1, 0.4)).toBeCloseTo(0.5)
})
test("sending - should return ", function(){
    expect(sendingEmailTo("fatma")).toBe(`
        Hi, fatma 
        Thank you for sjoining us. We're glad to have you on board.
        
        you now have verifcation code is only valid for the next 3 minutes
        
        fa324
      
       Thanks,
        john
        `)
})
test("sending - should return ", function () {
    expect(sendingEmailTo("fatma")).toMatch(/verifcation code is only valid for the next 3 minutes/i)
})
test("isEven -should return true for num 4",function () {
    expect(isEven(4)).toBeTruthy()
})
test("isEven -should return true for num 3",function () {
    expect(isEven(3)).toBeFalsy()
})
test("validate", function () {
    let x = null; // undefined
    let y = null; // undefined
   // expect(x).toBeUndefined()
  //  expect(x).toBeUndefined() 
    expect(y).toBeNull()  
})
 



