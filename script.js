const API_KEY = "api_key=4e4b774e9c312d8f78c80d23cab1482c"
const BASE_URL = "https://api.themoviedb.org/3/"
const API_URL =
    BASE_URL +
    "discover/movie?include_adult=false&include_video=false&language=en-US&primary_release_date.gte=2023-05-12&primary_release_date.lte=2023-06-30&sort_by=popularity.desc&vote_count.gte=30&with_origin_country=US&with_original_language=en&" +
    API_KEY
const IMG_URL = "http://image.tmdb.org/t/p/w500"
const main = document.querySelector("main")

/* now playing button */
document.querySelector("button").addEventListener("click", handleGetNowPlaying)

//passing in API URL
function handleGetNowPlaying() {
    getNowPlaying(API_URL)
}

//getting data from API
function getNowPlaying(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results)
            showNowPlaying(data.results)
        })
        .catch((err) => console.log(`${err}`))
}

//displaying movies in theater now
function showNowPlaying(data){
    main.innerHTML = ""
    data.forEach( movie => {
        const {title, poster_path, release_date, vote_average, overview} = movie
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt=${title}>

            <div class="movie-info">
                <h4 class="movie-title">${title}</h4>
                <span class="score">score: ${vote_average}</span>
            </div>

            <div class="movie-info">
                <h6 class="release-date">released ${release_date}</h6>
            </div>

            <div class="overview">
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}    

/* upcoming button */
document.querySelector("#upcoming").addEventListener("click", handleUpcoming)

//passing in API URL
function handleUpcoming() {
    getUpcoming(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en&page=1&primary_release_date.gte=2023-07-02&primary_release_date.lte=2023-07-30&region=US&sort_by=popularity.desc&api_key=4e4b774e9c312d8f78c80d23cab1482c"
    )
}

//getting data from API
function getUpcoming(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results)
            showUpcoming(data.results)
        })
        .catch((err) => console.log(`${err}`))
}

//displaying movies in theater in July
function showUpcoming(data) {
    main.innerHTML = "" 
    data.forEach((movie) => {
        let { title, poster_path, release_date, popularity, overview } = movie
        let roundedPopularity = Math.floor(popularity)
        //console.log(roundedPopularity)
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt=${title}>

            <div class="movie-info">
                <h4 class="movie-title">${title}</h4>
                <span class="score">popularity: ${roundedPopularity}</span>
            </div>

            <div class="movie-info">
                <h6 class="release-date">releases on ${release_date}</h6>
            </div>

            <div class="overview">
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}  

