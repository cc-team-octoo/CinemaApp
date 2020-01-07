const currentFilmsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CURRENT_FILMS_SUCCESS':
            return action.payload
        default:
            return state
    }
}

export default currentFilmsReducer
