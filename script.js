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
function Movie(title, year, plot, cast, runtime, rating) {
  this.title = title;
  this.year = year;
  this.plot = plot;
  this.cast = cast;
  this.runtime = runtime;
  this.rating = rating;
}

// add more movies
function addMovie() {
  let form = document.createElement('form');
  //style the form
  form.setAttribute(
    'style',
    'display: flex; flex-direction: column; width: 300px;'
  );
  //getting the title
  let titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'Please enter the title of the movie';

  // append to the form
  form.appendChild(titleInput);
  //getting the plot
  let plotInput = document.createElement('input');
  plotInput.type = 'text';
  plotInput.placeholder = 'What is the plot of this movie?';
  form.appendChild(plotInput);
  //get the year
  let yearInput = document.createElement('input');
  yearInput.type = 'number';
  yearInput.placeholder = 'What is the year of this movie?';
  form.appendChild(yearInput);
  // get the cast
  let castInput = document.createElement('input');
  castInput.type = 'text';
  castInput.placeholder = 'Who is acting in this movie?';
  form.appendChild(castInput);
  let runtimeInput = document.createElement('input');
  runtimeInput.type = 'number';
  runtimeInput.placeholder = 'How long is this movie?';
  form.appendChild(runtimeInput);
  let ratingInput = document.createElement('input');
  ratingInput.type = 'number';
  ratingInput.placeholder = 'What is the rating of this movie?';
  form.appendChild(ratingInput);
  // create submit button
  let submitButton = document.createElement('button');
  submitButton.setAttribute(
    'style',
    'width: 70px; margin-top: 5px;margin-left: 30%;'
  );
  submitButton.innerHTML = 'Submit';
  form.appendChild(submitButton);

  //get the library container
  let addMovieContainer = document.getElementById('addMovieContainer');
  addMovieContainer.appendChild(form);
  //push the new book to the myLibrary array
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let title = titleInput.value;
    let year = yearInput.value;
    let plot = plotInput.value;
    let cast = castInput.value;
    let runtime = runtimeInput.value;
    let rating = ratingInput.value;
    let movie = new Movie(title, year, plot, cast, runtime, rating);
    movieData = movieData + movie;
    displayMovies();
  });
}
addMovie();
