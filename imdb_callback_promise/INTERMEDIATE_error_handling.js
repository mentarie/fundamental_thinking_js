// CODE DARI fetch refactor

// SOAL
// "Bagaimana jika film yang dicari tidak ada/kosong?" --> foreach mengembalikan nilai kosong

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value); 
        updateUI(movies);
    } catch (error) {
        alert(error); //perlu nangkap error manual di getMovies juga
    }
});

document.addEventListener('click', async function (element) {
    if (element.target.classList.contains('modal-detail-button')) {
        const imdbid = element.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=68aec5a&s=' + keyword) 
        .then(response => { //error klo movie ga ditemuin
            // console.log(response); //cek "status" & "ok"
            if (!response.ok) {
                throw new Error(response.statusText); //"lempar pesan error ke catch"
            }
            return response.json();
        })
        .then(response => { //error klo API salah
            if (response.Response === "False") {
                throw new Error(response.Error); //"lempar pesan error ke catch"
            }
            return response.Search
        });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => {
        cards += showCards(m);
    });
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=68aec5a&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetails(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function showCards(m) {
    return  `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <button type="button" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">
                            Show Details
                        </button>
                    </div>
                  </div>
            </div>`;
}

function showMovieDetails(m) {
    return  `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director:</strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actor:</strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer:</strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot:</strong> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}