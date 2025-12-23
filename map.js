// map function ya loop hota hai.
//map array par lagta hai.
let num=[2,4,5,6,7,8]
//for(initalize; condition; increment/decrement)

let newarr=num.map( (e)=>
{return e*2              //callback function jo parameter me pass kiya 
                         //higher order function - parameter me function ko liya jese map
 } )
console.log(newarr)


//######################## filter  #########################

let mona=num.filter( (e)=>
{return e%2 
  //return e>7                 //callback function jo parameter me pass kiya 
                         //higher order function - parameter me function ko liya jese map
} )
console.log(mona)



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Reduse  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let nums=[2,4,5,6,7,8]
let newvalue=nums.reduce( (acc,crr) =>
{
    return acc+crr
}, 0 )
console.log(newvalue)

//########################array of object(api)
let data=[{
    Name:"sonu",
    age:19,
    city:"bhopal"
},

{ Name:"aarti",
    age:19,
    city:"indore"},

{ Name:"pooja",
    age:19,
    city:"bhopal"}]


 data.map((e)=>
    {
        console.log(e);
    })