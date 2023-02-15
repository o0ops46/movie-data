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
//convert from object to array

/*
let movieDataArray = [];


const movieList = document.getElementById('movie-list');
const displayMovieData = () => {
  movieList.innerHTML = '';
  for (const {
    movieName,
    plot,
    rating: rank,
    year,
    cast,
    runtime,
  } of movieArray) {
    const p = document.createElement('p');
    p.innerHTML = `${movieName}`;
    movieList.appendChild(p);
    const ul = document.createElement('ul');
    const movieDetails = `
      <li>Plot: ${plot}</li>
      <li>Rank: ${rank}</li>
      <li>Year: ${year}</li>
      <li>Cast: ${cast}</li>
      <li>Run Time: ${runtime}</li>      
    `;
    ul.innerHTML = movieDetails;
    movieList.appendChild(ul);
  }
};

const sortBy = event => {
  const sortByVal = event.target.value;
  if (sortByVal) {
    movieArray.sort((a, b) => a[sortByVal] - b[sortByVal]);
  } else {
    movieArray = originalMovieArray.slice();
  }
  displayMovieData();
};

const originalMovieArray = Object.entries(movieData).reduce(
  (arr, [movieName, movieDetails]) => {
    const movieObj = { movieName, ...movieDetails };
    arr.push(movieObj);
    return arr;
  },
  []
);

let movieArray = originalMovieArray.slice();
document.getElementById('sort-by').addEventListener('input', sortBy);
displayMovieData();
*/
