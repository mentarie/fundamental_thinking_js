// http://www.omdbapi.com/
// https://www.postman.com/downloads/
// https://insomnia.rest/
// https://code.jquery.com/
// https://getbootstrap.com/
// ---------------------------------------------------------------------------------------------

$('.search-button').on('click', function () {//"jquery tolong carikan saya class ... ketika diklik maka ..."
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=68aec5a&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search; //hasil langsung jd array of object
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            // Ketika web reload, maka ambil API Movie
            $('.movie-container').html(cards); //"jQuery, tolong carikan saya elemen dgn class movie-container, dan tempelkan cards ke dalamnya"
            
            // Ketika tombol detail di-klik
            $('.modal-detail-button').on('click', function () { //Jangan pakai arrow, karena arrow ga support scope/this
                // console.log($(this).data('imdbid')); //cek apakah idnya masuk atau belum
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=68aec5a&i=' + $(this).data('imdbid'),
                    success: m => {
                        // console.log(m);
                        const movieDetail = showMovieDetails(m);
                        $('.modal-body').html(movieDetail); 
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            })
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
})

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