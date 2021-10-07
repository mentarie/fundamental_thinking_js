// http://www.omdbapi.com/
// https://www.postman.com/downloads/
// https://insomnia.rest/
// https://code.jquery.com/
// https://getbootstrap.com/
// ---------------------------------------------------------------------------------------------


$.ajax({
    url: 'http://www.omdbapi.com/?apikey=68aec5a&s=harry',
    success: results => {
        const movies = results.Search; //hasil langsung jd array of object
        let cards = '';
        movies.forEach(m => {
            cards += 
            `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="movieDetailModal">Show Details</a>
                    </div>
                  </div>
            </div>`
        });
        $('.movie-container').html(cards); //"jQuery, tolong carikan saya elemen dgn class movie-container, dan tempelkan cards ke dalamnya"
    },
    error: (e) => {
        console.log(e.responseText);
    }
});


