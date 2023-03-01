import http from '../http-common';

const create = async (data) => {
    return await http
        .post('/plans/create', data)
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

export default {
    create,
};
