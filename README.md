Movie List App

This is a simple movie list app that displays the details of a few movies and provides an option to sort them based on a specific attribute.

The app uses an object movieData that contains the details of the movies. Each movie is represented as a key-value pair, where the key is the name of the movie and the value is an object containing its details. The details include the plot, cast, runtime, rating, and year.

The app converts the movieData object into an array of objects using the Object.entries() method and the reduce() function. This new array, originalMovieArray, is then used as the base array to display the movie details on the webpage.

The app displays the movie details in an unordered list (ul), and creates a button for each movie to delete it from the list. The displayMovieData() function is called to render the movies onto the webpage.

The app also provides a sort feature based on a selected attribute. When the user selects an attribute from the dropdown menu, the sortBy() function is called to sort the movieArray based on the selected attribute. The sorted movieArray is then displayed on the webpage using the displayMovieData() function.

Overall, this app provides a simple example of using JavaScript to display and sort data on a webpage.
