// FETCH REFACTOR

const searchButton = document.querySelector('.search-button'); //"js carikan saya"
searchButton.addEventListener('click', function () { //"ketika tombolnya di klik"
    const inputKeyword = document.querySelector('.input-keyword'); //"js carikan saya"
    fetch('http://www.omdbapi.com/?apikey=68aec5a&s=' + inputKeyword.value) //mengembalikan promise, datanya ga lgsung dapet. harus ada method
        .then(response => response.json()) //ambil data json dari promise
        .then(response=> {
            // Ambil hasil search, masukkan ke card
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            // Masukkan cards ke dalam container
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;
            // Ketika tombil detail di-klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => { //"kenapa di-foreach?" karena modalDetailButton bentuknya nodelist
                btn.addEventListener('click', function () {//"kenapa disini pakai func?" karena kita butuh this
                    // console.log(this); //cek idnya + this jalan apa engga
                    const imdbid = this.dataset.imdbid; //langsung ambil imdbid
                    fetch('http://www.omdbapi.com/?apikey=68aec5a&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetails(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        });
                })
            });
        });
});

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