import http from '../http-common';

const sendData = async (data) => {
    return await http
        .post('/riskprofiles/recommend', {
            answers: data,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

const changeProfile = async (data) => {
    return await http
        .patch('/account/setriskprofile', {
            profile: data,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

export default {
    sendData,
    changeProfile,
};
