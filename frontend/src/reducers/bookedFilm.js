const bookedFilmReducer = (state = '', action) => {
    switch(action.type) {
        case 'FILM_TO_BOOK_CHOSEN':
            return action.payload
        default:
            return state
    }
}

export default bookedFilmReducer;
