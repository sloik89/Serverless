const result = document.querySelector('.result')

const fetchData = async()=> {
    const {data} = await axios.get('/.netlify/functions/hello')
    console.log(data);
    renderContent(data)
}
fetchData()

renderContent = (data) => {
    result.textContent = data
}