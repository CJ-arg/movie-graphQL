import React from "react";

const AddMovie = () => {
  return (
    <div className="addMovieFormContainer">
      <form onSubmit={() => alert("Movie Added!!")}>
        <label>Name</label>
        <input type="text" required />
        <label>Genre</label>
        <input type="text" required />
        <label>Year</label>
        <input type="text" required />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default AddMovie;
