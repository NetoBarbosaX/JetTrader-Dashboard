import auth from '@/service/auth';

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        isAuthenticated: (state) => state.token,
        user: (state) => state.user,
    },
    mutations: {
        setLogin(state, { token, user }) {
            state.token = token;
            state.user = user;
        },
        changeProfile(state, newProfile) {
            state.user.profile = newProfile;
        },
    },
    actions: {
        async login({ commit }, data) {
            let response = await auth.login(data);
            commit('setLogin', response);
            return response;
        },
        async register({ commit }, data) {
            let response = await auth.register(data);
            commit('setLogin', response);
            return response;
        },
        async renewToken({ commit }) {
            try {
                let response = await auth.renewToken();
                commit('setLogin', response);
                return response;
            } catch (e) {
                console.log('Renew Token error:', e);
                commit('setLogin', { token: null, user: null });
                return false;
            }
        },
        logout({ commit }) {
            commit('setLogin', { token: null, user: null });
        },

        updateProfile({ commit }, newProfile) {
            return commit('changeProfile', newProfile);
        },
    },
};
