import http from '../http-common';

const sendTickets = async (ticket) => {
    return await http
        .post('/tickets/create', {
            ticket,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

export default {
    sendTickets,
};
