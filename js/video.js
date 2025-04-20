const LoadVideos = (searchText= "") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        .then((data) => displayVideos(data.videos
        ))

        .catch((error) => console.log(error))

};

function convertTime(time){
    //get hour and rest second
     const hour = parseInt (time /3600);
     let remainingsecond = time%3600;
     const minit= parseInt(remainingsecond/60);
     remainingsecond =remainingsecond % 60
      return `${hour} hour ${minit}  minuite ${remainingsecond} second ago `
  }

const displayVideos = (video) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML="";
    if(video.length == 0){
        videoContainer.classList.remove("grid")
        videoContainer.innerHTML=`
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
            
        <img src="assets/Icon.png"/>

        <p class="font-bold lg:text-3xl md:text-2xl ">Oops!! Sorry, There is no   content here</p>
        
        </div> 

        `
        return;
    }else{
    videoContainer.classList.add("grid")
    }

    video.forEach(element => {
        console.log(element)
        const card = document.createElement('div')
        card.classList = 'card card-compact'
        card.innerHTML = `
        <div class="">
                  <div>
                  <figure class="h-[200px] relative">
                  <img class="w-full h-full object-cover"
                  src=${element.thumbnail}
                  <div>
                        ${element.others.posted_date === ''? "":
                       ` <span class="absolute right-[7px] bottom-[7px] bg-black px-4 py-2 rounded text-white text-xs ">${convertTime(element.others.posted_date)}</span>`
                        }
                  </div>
                  </figure>
         </div>
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
                             ${element.authors[0].verified === true ? `<img class="h-5 w-5 " src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />`: ""}
                             </div>
         
                             <p >${element.others.views } Views</p>
                      

                      </div>
                  </div>

                  <div>
                        <p><button onclick="loadDisplayDetails('${element.video_id}') " class="btn text-white bg-red-500 mt-3">Details</button></p>
                  </div>
        </div>

        `
        videoContainer.append(card)
    });
}
document.getElementById('search-Input').addEventListener('keyup',function(e){
    LoadVideos(e.target.value)
})
LoadVideos();