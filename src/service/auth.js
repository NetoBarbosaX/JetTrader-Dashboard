import http from '../http-common';

const login = async (data) => {
    return await http
        .post('/account/login', {
            email: data.email,
            password: data.password,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

const register = async (data) => {
    return await http
        .post('/account/create', {
            ...data,
            password: data.password,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

// Reset password
const rpRequestToken = async ({ phone }) => {
    return await http
        .post('/auth/reset-password', {
            phone,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

const validateEmail = async (token) => {
    return await http
        .patch(`/account/verify/${token}`, {
            token,
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

const renewToken = async () => {
    return await http
        .get('/account/renewToken')
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

export default {
    login,
    register,
    validateEmail,
    renewToken,
    resetPassword: {
        requestToken: rpRequestToken,
    },
};
