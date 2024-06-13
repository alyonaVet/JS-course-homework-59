import './App.css';
import AddFilmForm from './components/AddFilmForm/AddFilmForm';
import React, {useState} from 'react';
import {FilmName} from './types';
import FilmField from './components/FilmField/FilmField';

const App = () => {
  const [filmTitles, setFilmsTitles] = useState<FilmName[]>([]);

  const addFilm = (newFilm: FilmName) => {
    setFilmsTitles((prevFilms) => [...prevFilms, newFilm]);
  };

  const deleteFilm = (id: string) => {
    setFilmsTitles((prevFilm) => {
      return prevFilm.filter((film) => film.id !== id);
    });
  };

  const changeFilmName = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setFilmsTitles((prevState) => {
      return prevState.map((film) => {
        if (film.id === id) {
          return {...film, filmTitle: event.target.value};
        }
        return film;
      });
    });
  };


  return (
    <>
      <AddFilmForm onSubmit={addFilm}/>
      <div className="container mt-4">
        {filmTitles.length > 0 && <h5>To watch list:</h5>}
        {filmTitles.map((film: FilmName) => {
          return <FilmField
            key={film.id}
            title={film.filmTitle}
            onRemove={() => deleteFilm(film.id)}
            onChangeTitle={(event) => changeFilmName(event, film.id)}/>;
        })}
      </div>
    </>
  );
};


export default App;
