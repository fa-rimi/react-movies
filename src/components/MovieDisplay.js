// import "../App.css";
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export function MovieDisplay({ movie }) {
  const loaded = () => {
    //The component must return some JSX
    return (
      // another way of writing 'div' in react: <>...</>
      <div className="displayed-movie">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-info">
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <h2>{movie.Year}</h2>
        </div>
      </div>
    );
  };
  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}

// We must export the component to use it in other files
export default MovieDisplay;
// movie.Title is basically prop.title
