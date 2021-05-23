import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { removeFavorites } from '../actions/movieActions'

const FavoriteMovieList = (props) => {
  const favorites = props.favorites;

  const handleRemoveFav = (id) => {
    props.removeFavorites(id)
  }

  return (<div className="col-xs savedContainer">
    <h5>Favorite Movies</h5>
    {
      favorites.map(movie => {
        return <div key={movie.id}>
          <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
            {movie.title}
            <span><span className="material-icons" onClick={() => handleRemoveFav(movie.id)}>remove_circle</span></span>
          </Link>
        </div>
      })
    }
  </div>);
}

const mapStateToProps = state => {
  //console.log('ab: FavoriteMovieList: favorite.state', state.favorites.favorites)
  return {
    favorites: state.favorites.favorites,

  }
}

export default connect(mapStateToProps, { removeFavorites })(FavoriteMovieList);