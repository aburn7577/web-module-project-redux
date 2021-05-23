//action type
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE'

//action creater
export const deleteMovie = (id) => {
    return ({ type: DELETE_MOVIE, payload: id });
}
export const addMovie = newMovie => {
    return ({
        type: ADD_MOVIE,
        payload: newMovie
    })
}
