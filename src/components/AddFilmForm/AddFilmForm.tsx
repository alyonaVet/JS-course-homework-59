import React, {useState} from 'react';
import {FilmName} from '../../types';

interface AddFilmProps {
  onSubmit: (film: FilmName) => void;
}

const AddFilmForm: React.FC<AddFilmProps> = ({onSubmit}) => {
  const [currentFilm, setCurrentFilm] = useState('');

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      filmTitle: currentFilm,
    });
    setCurrentFilm('');
  };

  const filmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFilm((prevFilm) => {
      prevFilm = event.target.value;
      return prevFilm;
    });
  };

  return (
    <div className="container mt-5">
      <h4>Add a film title</h4>
      <form className="row mt-3 align-items-center" onSubmit={onFormSubmit}>
        <div className="col-6">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            required
            onChange={filmChange}
            value={currentFilm}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary px-3">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddFilmForm;