let myposts = new XMLHttpRequest();

myposts.open('GET' , 'https://api.themoviedb.org/3/trending/movie/day?api_key=f1d0b4d2de3da2d622e729074f5b01be')
myposts.send()
var allPosts = []

 myposts.addEventListener('readystatechange',()=>{
    if (myposts.readyState == 4 && myposts.status  == 200){
        allPosts = JSON.parse(myposts.response).results
        console.log(allPosts.results);
        displayData()
    }

 })  



 function displayData(){

    var cartoona = '';

    for(var i =0 ; i < allPosts.length; i++){

        cartoona +=`<div class="mine">
        <img src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}"/>
        <h3>${allPosts[i].title}</h3>
        <p>${allPosts[i].overview}</p>
        <small>vote:${allPosts[i].vote_average}</small>
      </div>`

    }


 document.getElementById('choose').innerHTML = cartoona;



 }

 tv.addEventListener('click', ()=>{
    let myposts = new XMLHttpRequest();

    myposts.open('GET' , 'https://api.themoviedb.org/3/trending/tv/day?api_key=f1d0b4d2de3da2d622e729074f5b01be')
    myposts.send()
    var allPosts = []
    
     myposts.addEventListener('readystatechange',()=>{
        if (myposts.readyState == 4 && myposts.status  == 200){
            allPosts = JSON.parse(myposts.response).results
            console.log(allPosts.results);
            displayData()
        }
    
     })  
    
    
    
     function displayData(){
    
        var cartoona = '';
    
        for(var i =0 ; i < allPosts.length; i++){
    
            cartoona +=`<div class="mine">
            <img src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}"/>
            <h3>${allPosts[i].name}</h3>
            <p>${allPosts[i].overview}</p>
            <small>vote:${allPosts[i].vote_average}</small>
          </div>`
    
        }
    
    
     document.getElementById('choose').innerHTML = cartoona;
    
    
    
     }
 })

 movies.addEventListener('click', ()=>{
    let myposts = new XMLHttpRequest();

    myposts.open('GET' , 'https://api.themoviedb.org/3/trending/movie/day?api_key=f1d0b4d2de3da2d622e729074f5b01be')
    myposts.send()
    var allPosts = []
    
     myposts.addEventListener('readystatechange',()=>{
        if (myposts.readyState == 4 && myposts.status  == 200){
            allPosts = JSON.parse(myposts.response).results
            console.log(allPosts.results);
            displayData()
        }
    
     })  
    
    
    
     function displayData(){
    
        var cartoona = '';
    
        for(var i =0 ; i < allPosts.length; i++){
            
            cartoona +=`<div class="mine">
            <img src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}"/>
            <h3>${allPosts[i].title}</h3>
            <p>${allPosts[i].overview}</p>
            <small>vote:${allPosts[i].vote_average}</small>
          </div>`
    
        }
    
    
     document.getElementById('choose').innerHTML = cartoona;
    
    
    
     }
 })

 Esposides.addEventListener('click',()=>{
    let myposts = new XMLHttpRequest();

    myposts.open('GET' , 'https://api.themoviedb.org/3/discover/tv?api_key=f1d0b4d2de3da2d622e729074f5b01be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0')
    myposts.send()
    var allPosts = []
    
     myposts.addEventListener('readystatechange',()=>{
        if (myposts.readyState == 4 && myposts.status  == 200){
            allPosts = JSON.parse(myposts.response).results
            console.log(allPosts.results);
            displayData()
        }
    
     })  
    
    
    
     function displayData(){
    
        var cartoona = '';
    
        for(var i =0 ; i < allPosts.length; i++){
            if (allPosts[i].backdrop_path == null){
                continue;
            }
    
            cartoona +=`<div class="mine">
            <img src="https://image.tmdb.org/t/p/w500${allPosts[i].backdrop_path}"/>
            <h3>${allPosts[i].name}</h3>
            <p>${allPosts[i].overview}</p>
            <small>language:${allPosts[i].original_language}</small>
            <small>Country:${allPosts[i].origin_country}</small>

          </div>`
    
        }
    
    
     document.getElementById('choose').innerHTML = cartoona;
    
    
    
     }
 })