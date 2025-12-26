// let FetchData= async()=>{

//     let api='https://jsonplaceholder.typicode.com/posts'

//     let res=await fetch(api,{method:"GET"})

//     let Data=await res.json()

//     console.log(res)
//     console.log(Data)

//     let show=document.querySelector("#datashow")

//     Data.map((e)=>{
//         show.innerHTML+= `
        
//         <tr>
//         <td> ${e.ID} </td
//         <td> ${e.Title} </td
//         <td> ${e.Body} </td
//         </tr>
        
//         `

//     })
// }
// FetchData()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// fetch method me 4 method hoti hai.. UPDATE DELETE krna ye fetch hi krwati hai
// GET METHOD
// asyncrouns => async await => syncrouns 
// fetch promise return krti hai..Pendig, Resolve, Reject


// let FetchData= async()=>{
//     let api = 'https://jsonplaceholder.typicode.com/posts'

//     let res = await fetch(api,{method:"GET"})

//     let Data = await res.json()

//     console.log(res);

//     console.log(Data);

// };
// FetchData()

// ======================================= (2) ========================================


let FetchData= async()=>{
    let api = 'https://jsonplaceholder.typicode.com/posts'

    let res = await fetch(api,{method:"GET"})

    let Data = await res.json()

    console.log(res);

    console.log(Data);

    let show= document.querySelector("#datashow")
    Data.map((e)=>{
        show.innerHTML+=`
        <tr>
        <td> ${e.id} </td>
        <td> ${e.title} </td>
        <td> ${e.body} </td>
        </tr> 
        `
        // `` template literal kahte hai
    })

};
FetchData()