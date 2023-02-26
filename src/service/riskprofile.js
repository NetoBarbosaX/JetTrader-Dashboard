import http from '../http-common';

const sendData = async (data) => {
    return await http
        .post('/auth', {
            dataQuestion : data,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

export default {
    sendData,
};
