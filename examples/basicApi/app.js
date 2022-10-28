const result = document.querySelector('.result')

const fetchData = async() => {
    try{
        const {data} =  await axios.get('https://ephemeral-druid-1d95c1.netlify.app/api/basicApi')
        console.log(data)
        displayProducts(data)
    }
    catch(err){
        result.innerHTML = `<h2> Some error </h2>`
        console.log(err);

    }
}
fetchData()

function displayProducts(data){
    const renderData = data.map((elem,idx) => {
        const {id,name,image,price} = elem
        return (
            `
            <div class="item">
                <div class="img-container">
                    <img src="${image.url}" class="img"/>   
                </div>
                <div class="desc">
                    <p class="name-item">${name} </p>
                     <p class="price-item">${price} </p>
                </div>
            </div>
            `
        )
    }).join('')
    console.log(renderData)
    result.innerHTML = renderData
}