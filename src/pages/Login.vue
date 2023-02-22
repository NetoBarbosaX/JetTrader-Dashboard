<template>
    <div class="login-body" style="justify-content: end;">
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
                        <Button :disabled="validFields" type="button" @click="login" label="Login"></Button>
                        <span>Don’t have an account?<a href="/register">Sign-up here</a></span>
                    </div>
                </div>

                <div class="login-footer flex align-items-center">
                    <div class="flex align-items-center login-footer-logo-container">
                        <img :src="'layout/images/logo-' + color + '.svg'" class="login-logo" style="width: 30px" />
                        <img :src="'layout/images/appname-' + color + '.svg'" class="login-appname" style="width: 120px" />
                    </div>
                    <span>Copyright 2023</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
        login() {
            console.log(this.userData);
            axios
                .post('/api/submit', this.userData)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
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
.login-body{
    height: 100vh;
    background-image: url('C:/Users/eletr/Desktop/AtlantisVue/public/layout/images/background.svg');
}
</style>
