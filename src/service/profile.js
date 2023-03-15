import http from '../http-common';

const updateProfile = async (data) => {
    return await http
        .post('/api/submit', data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default {
    updateProfile,
};
