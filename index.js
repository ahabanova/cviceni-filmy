//01

const listElm = document.querySelector('.movie-list')
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies`)
    .then(response => response.json())
    .then((data) => {

        data.forEach(film => {
            listElm.innerHTML += `
            <li class="movie-detail">
            <div class="movie-poster">
                <img 
                src="${film.posterUrl}"
                alt="${film.title}."
                />
            </div>
            <div class="movie-info">
                <h2 class="movie-title">${film.title}</h2>
                <div class="movie-year">Rok vydání: ${film.year}</div>
                <div class="movie-link">
                <a href="${film.url}" target="_blank">Odkaz na CSFD</a>
                </div>
            </div>
            </li>
            `
        });
    })