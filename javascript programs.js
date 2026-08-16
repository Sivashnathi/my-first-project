let p = Promise.resolve(10);

p.then(value=>console.log(value));


console.log("start");

Promise.resolve().then(()=>{
    console.log("Promise");




});
console.log("End")


Promise.resolve(5).then(x=>x*2).then(x=>console.log(x));


Promise.resolve(10).then(x=>{throw new Error("fail")}).catch(err=>console.log("Caught"));

Promise.resolve(1).then(x=>x+1).then(x=>x+1).then(console.log);


Promise.resolve(5).then(x=>{console.log(x)});


Promise.resolve().then(()=>console.log("A")).then(()=>console.log("B"));

