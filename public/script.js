// fetch the datetime from API endpoint on NodeJS and populate the content div
const getData = async () =>{
    const response = await fetch('/items')
    if (response.ok){
        const data = await response.json()
        console.log(data)
        data.forEach(item =>{
            let div = document.createElement('div')    
            div.textContent = item.name
            document.querySelector('#content').appendChild(div)
        })
    }
    else{
        document.querySelector('#content').innerHTML = `<div>❌ MongoDB is not connected. Please check your connection string in .env file.</div>`
    }
    
}

getData()
