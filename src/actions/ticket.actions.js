import { ticketConstants } from '../constants';
import { toast } from 'react-toastify';

export const ticketActions = {
	ticketInfoRequest,
};

function ticketInfoRequest(user) {

	return dispatch => {
		dispatch(request({ user }));
		toast.info("Recordes submited successfully", {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 5000,
		});
		
	};

	function request(user) {
		return { type: ticketConstants.TICKET_INFO_REQUEST, user };
	}
	
}
