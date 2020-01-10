const bookedFilmTitleReducer = (state = '', action) => {
    switch(action.type) {
        case 'FILM_TITLE_CHOSEN':
            return action.payload
        default:
            return state
    }
}

export default bookedFilmTitleReducer;
