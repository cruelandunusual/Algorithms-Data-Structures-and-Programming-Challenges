 function a() {
    console.log("a() was called.");
    b();
    console.log("a() is returning.");
 }
 
function b() {
    console.log("b() was called.");
    c();
    console.log("b() is returning.");
 }
 
 function c() {
    console.log("c() was called.");
    console.log("c() is returning.");
 }

 a();
