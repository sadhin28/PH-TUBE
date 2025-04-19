const LoadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then((data)=>displayVideos(data.videos
    ))
   
    .catch((error)=> console.log(error))
    
}
const displayVideos = (video)=>{
   const videoContainer = document.getElementById('videos')
   video.forEach(element => {
      console.log(element)
      const card = document.createElement('div')
      card.classList='card card-compact'
      card.innerHTML=`
      <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>`
  videoContainer.append(card)
   });
}

LoadVideos()