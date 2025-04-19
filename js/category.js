const loadCatagories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then((data)=>displayCatagories(data.categories
    ))
   
    .catch((error)=> console.log(error))
    
}
const displayCatagories = (data)=>{
   const categoriesContainer= document.getElementById('btnCatagoris')
    data.forEach(item => {
        // console.log(item)
        const button = document.createElement('button')
        button.classList='btn';
        button.innerText=item.category;
        categoriesContainer.append(button)
    });
}

loadCatagories()