const obj={
    name:"shafeeq",
    place:"tirur",
    // ---------arrow have not own context ------------------------------
    // greet:()=>{
    //     console.log(`hi, i am  ${this.name} and from ${this.place}`);
    // },
    // ------regular function have context------------------------------
    greet:function(){
        console.log(`hi, i am  ${this.name} and from ${this.place}` );
    },
    message:function (){
        console.log("hello mesage");
    }
}
module.exports=obj 