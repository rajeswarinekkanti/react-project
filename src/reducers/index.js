import { combineReducers } from 'redux';

import { ticketInfoRequest } from './ticket.reducer';
const rootReducer = combineReducers({
    ticketInfoRequest,

});
export default rootReducer;