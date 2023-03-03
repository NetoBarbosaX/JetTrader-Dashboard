import http from '../http-common';

const getData = async (USERID) => {
    return await http
        .get('/plans/list/byuserid/' + USERID)
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

const getPlans = async () => {
    return await http
        .get('/plans/list/byuserid/' + localStorage.getItem('user'))
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

export default {
    getData,
    getPlans,
};
