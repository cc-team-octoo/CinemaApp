const takenSeatsReducer = (state = ' ', action) => {
    switch(action.type) {
        case 'GET_TAKEN_SEATS':
            return {
                ...state,
                takenSeats: action.payload
            }
        default:
            return state
    }
}

export default takenSeatsReducer;
