const loadCatagories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then((data)=>displayCatagories(data.categories
    ))
   
    .catch((error)=> console.log(error))
    
}

const loadCategoriesVideo=(id) =>{
    
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`

    )
    .then(res=>res.json())
    .then((data)=>displayVideos(data.category))
    
}
const displayCatagories = (data)=>{
   const categoriesContainer= document.getElementById('btnCatagoris')
    data.forEach(item => {
        // console.log(item)
        const buttonCatagories = document.createElement('div')
        buttonCatagories.innerHTML=`
        <button onclick="loadCategoriesVideo(${item.category_id})" class= "btn">
          ${item.category}
        </button>
        `
        categoriesContainer.append(buttonCatagories)
    });
}

loadCatagories()