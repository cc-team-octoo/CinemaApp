const bookingTimeReducer = (state = '', action) => {
    switch(action.type) {
        case 'TIME_OF_BOOKING_CHOSEN':
            return action.payload
        default:
            return state
    }
}

export default bookingTimeReducer;
