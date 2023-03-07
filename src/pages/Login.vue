<template>
    <div class="login-body" style="justify-content: end">
        <div>
            <div class="login-panel p-fluid">
                <div class="flex flex-column">
                    <div class="flex align-items-center mb-6 logo-container">
                        <img :src="'layout/images/logo-' + color + '.svg'" class="login-logo" />
                        <img :src="'layout/images/appname-' + color + '.svg'" class="login-appname" />
                    </div>
                    <div class="form-container">
                        <span class="p-input-icon-left">
                            <i class="pi pi-envelope"></i>
                            <InputText type="text" placeholder="Email" v-model="userData.email" />
                        </span>
                        <span class="p-input-icon-left">
                            <i class="pi pi-key"></i>
                            <InputText type="password" placeholder="Password" v-model="userData.password" />
                        </span>
                        <a href="/forgotPassword" class="flex">Forgot your password?</a>
                    </div>
                    <div class="button-container">
                        <Button :disabled="validFields" type="button" @click="processLogin" label="Login"></Button>
                        <span>Don’t have an account?<a href="/register">Sign-up here</a></span>
                    </div>
                    <div class="flex flex-column">
                        <div class="flex align-items-center login-footer-logo-container">
                            <img :src="'layout/images/logo-' + color + '.svg'" class="login-logo" style="width: 30px" />
                            <img :src="'layout/images/appname-' + color + '.svg'" class="login-appname" style="width: 120px" />
                            <span style="font-weight: 600; color: gray">Copyright 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { toast } from 'vue3-toastify';

export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async processLogin() {
            try {
                await this.login(this.userData);
                this.redirect();
            } catch (error) {
                this.showToastError();
            }
        },
        redirect() {
            this.$router.push(this.$route.query.redirect || '/');
        },
        showToastError() {
            toast.error('Invalid credentials', {
                icon: '🚀',
                autoClose: 5000,
            });
        },
    },
    mounted() {
        if (this.isAuthenticated) this.redirect();
    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
        loginColor() {
            if (this.$appState.colorScheme === 'light') return 'ondark';
            return 'onlight';
        },
        color() {
            if (this.$appState.colorScheme === 'light') return 'dark';
            return 'light';
        },
        validFields() {
            return this.userData.email.trim() === '' || this.userData.password.trim() === '';
        },
    },
};
</script>

<style>
.login-body {
    height: 100vh;
    background-image: url('@/assets/background.svg');
}
</style>
