const takenSeatsReducer = (state = {takenSeats: []}, action) => {
    switch(action.type) {
        case 'ADD_TAKEN_SEAT':
            return {
                takenSeats: [...state.takenSeats, action.payload]
            }
        case 'REMOVE_TAKEN_SEAT':
            const takenSeats = state.takenSeats.filter(el => el !== action.payload)
            return {
                takenSeats
            }
        case 'RESET_TAKEN_SEATS':
            return {
                ...state,
                takenSeats: []
            }

        default:
            return state
    }
}

export default takenSeatsReducer;
