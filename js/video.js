const LoadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then((data) => displayVideos(data.videos
        ))

        .catch((error) => console.log(error))

};



const displayVideos = (video) => {
    const videoContainer = document.getElementById('videos')
    video.forEach(element => {
        console.log(element)
        const card = document.createElement('div')
        card.classList = 'card card-compact'
        card.innerHTML = `
        <div class="">
                  <div><figure class="h-[200px]">
                  <img class="w-full h-full object-cover"
                  src=${element.thumbnail}
                  </figure></div>
                  <div class="flex gap-5   items-center">
                      <div class>
                              <img class=" object-cover mt-2 h-10 w-10 rounded-full" src=${element.authors[0].profile_picture}/>
                      </div>
         
                      <div class="mt-2">
                             <h1 class="font-bold text-xl">${element.
                             title
                             }</h1>
         
                             <div class="flex gap-3 items-center">
                             <p>${element.authors[0].profile_name}</p>
                             <img class="h-5 w-5 " src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />
                             </div>
         
                             <p >${element.others.views } Views</p>
                      
                      </div>
                  </div>
        </div>
    


        `

        videoContainer.append(card)
    });
}

LoadVideos()