
let FetchData= async()=>{
    let api = 'https://jsonplaceholder.typicode.com/users'

    let res = await fetch(api,{method:"GET"})

    let Data = await res.json()

    console.log(res);

    console.log(Data);

    let show= document.querySelector("#datashow")
    Data.map((e)=>{
        show.innerHTML+=`
        <tr>
        <td> ${e.id} </td>
        <td> ${e.name} </td>
        <td> ${e.email} </td>
        <td> ${e.address.city} </td>

        </tr>
        `
    })

};
FetchData()