document.addEventListener('DOMContentLoaded', ()=>{
    const url = "https://api.chucknorris.io/jokes/categories"

    fetch(url).then((response)=>{
        if(! response.ok){
            throw new Error('error ao receber os dados')
        }
        return response.json()
    })
    .then((data)=>{
       gerarcategorias(data)
    })
    .catch((err)=> console.error(err))
});
function gerarcategorias(categorias){
    // paramentro categoria = array de categoria
   console.log(categorias)
   const select = document.getElementById('opcao')
   categorias.map((categoria)=>{
    const options = document.createElement('option')
    options.innerHTML = `${categoria}`
    options.value = categoria
    select.appendChild(options)
   })
}
const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById("opcao").value;
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`;
    fetch(url).then((response)=>{
        if(! response.ok){
            throw new Error('erro ao encontrar piada')
        }
        return response.json()
    })
    .then((data)=>{
        gerarPiadas(data)
    })
    .catch((err)=>console.error(err))

});
function gerarPiadas(piada){
    console.log(piada)
    const joker = document.getElementById('joke')
    joker.innerHTML = piada.value
}