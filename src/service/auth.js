import http from '../http-common';

const login = async (data) => {
    return await http
        .post('/auth', {
            email: data.email,
            password: data.password 
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};

const register = async (data) => {
    return await http
        .post('/auth/register', {
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

const rpReadToken = async (token) => {
    return await http

        .get(`/auth/reset-password/${token}`, {
            headers: {
            },
        })
        .then((r) => r.data)
        .catch((error) => {
            throw error.response?.data || error.response || error;
        });
};


export default {
    login,
    register,
    resetPassword: {
        requestToken: rpRequestToken,
        readToken: rpReadToken,
    },
};
