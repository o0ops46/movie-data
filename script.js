'use strict';
let movieData = {
  'The Darjeeling Limited': {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ['Jason Schwartzman', 'Owen Wilson', 'Adrien Brody'],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  'The Royal Tenenbaums': {
    plot: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons',
    rating: 7.6,
    year: 2001,
    cast: ['Gene Hackman', 'Gwnyeth Paltrow', 'Anjelica Huston'],
    runtime: 170,
  },
  'Fantastic Mr. Fox': {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      'George Clooney',
      'Meryl Streep',
      'Bill Murray',
      'Jason Schwartzman',
    ],
    runtime: 147,
    rating: 7.9,
  },
  'The Grand Budapest Hotel': {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
  },
};
//render the movies
const movieList = document.getElementById('movie-list');
const displayMovies = function () {
  for (const [key, value] of Object.entries(movieData)) {
    const div = document.createElement('div');
    div.setAttribute(
      'style',
      'border: 2px solid grey; margin: 20px; padding: 10px;'
    );

    movieList.append(div);
    div.innerHTML = `The movie: <em> "${key}"</em> from ${value['year']} has ${value['runtime']} minutes runtime and has a rating of ${value['rating']} on IMDB. <br> ${value['plot']} <br> Some of the actors are: ${value['cast']} `;
  }
};
displayMovies();
// allow the user to filter the movies
const filteredMovies = movieData.filter(movie => {
  if (movie.rating >= 7.7) {
    return true;
  }
  return false;
});
console.log(filteredMovies);
//create a function that filters the movies.
// create a filter button when it's clicked to call the specific function
