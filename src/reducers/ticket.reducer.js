import { ticketConstants } from '../constants';

export function ticketInfoRequest(state = {}, action) {
	let tempArray = [];
	if(state.ticketInfo)
	tempArray = state.ticketInfo
	if(action.user)
	tempArray.push(action.user.user)

	switch (action.type) {
		case ticketConstants.TICKET_INFO_REQUEST:
			return { ...state,
				ticketInfo: tempArray, };
		
		default:
			return state;
	}
}