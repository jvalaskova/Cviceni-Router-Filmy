import React from 'react';
import movies from './../../movies.js';
import {useParams} from 'react-router-dom';

const Movie = () => {

	const { id } = useParams();

	return (
	<>
		{movies.find((movieId) => movieId.id == {id} ) }

		<div className="movie" key={id}>
				<img className="poster" src={'/assets/'+ movies.poster} alt="poster" />
				<h4  className="title">{movies.title}</h4>
				<p className="information">{movies.storyline}</p>
		</div>
	</>
	);
	
}

export default Movie;