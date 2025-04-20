const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then((data) => displayCatagories(data.categories
        ))

        .catch((error) => console.log(error))

}

const removeActiveClass=()=>{
  const buttons = document.getElementsByClassName("category-btn");
  
  for(let btn of buttons){
    btn.classList.remove('active');
  }
}

const loadCategoriesVideo = (id) => {

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`

    )
        .then(res => res.json())
        .then((data) =>{

            removeActiveClass()
            const activeBtn = document.getElementById(`btn${id}`)
            
            activeBtn.classList.add("active")
            displayVideos(data.category);
        })
        .catch((error) => console.log(error))

}

const loadDisplayDetails =async (videoId)=>{
    
    const uri =`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    const res = await fetch(uri);
    const data = await res.json();
    
    displayDetails(data.video)
}

const displayDetails=(video)=>{

    console.log(video)
    const detailsContainer = document.getElementById('modalcontent');
    document.getElementById('showmodal').click();
  
    detailsContainer.innerHTML=`
       <img class="rounded-2xl" src=${video.thumbnail}/>
        <p class="mt-5 text-justify" >${video.description}</p>
    `
}

const displayCatagories = (data) => {
    const categoriesContainer = document.getElementById('btnCatagoris')
    data.forEach(item => {
        // console.log(item)
        const buttonCatagories = document.createElement('div')
        buttonCatagories.innerHTML = `
        <button id="btn${item.category_id}" onclick="loadCategoriesVideo(${item.category_id})" class= "btn category-btn">
          ${item.category}
        </button>
        `
        categoriesContainer.append(buttonCatagories)
    });
}

loadCatagories()