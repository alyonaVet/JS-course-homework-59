import Button from '../../components/Button/Button';
import JokeCard from '../../components/JokeCard/JokeCard';
import {useEffect, useState} from 'react';

interface JokeProps {
  value: string;
}

const JokeBox = () => {
  const [joke, setJoke] = useState<JokeProps | null>(null);

  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const joke = await response.json();
        setJoke(joke);
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  };


  useEffect(() => {
    void fetchData();
  }, []);


  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-3" style={{ height: '250px' }}>
      <div>
        <JokeCard value={joke ? joke.value : ''}/>
      </div>
      <div className="mt-auto">
        <Button type="submit" className="btn btn-primary mt-auto" onClick={fetchData} children="Get a Joke"/>
      </div>
    </div>
  );
};

export default JokeBox;