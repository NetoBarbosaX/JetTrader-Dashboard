<template>
    <div class="login-body">
        <div class="login-image">
            <img :src="'layout/images/pages/login-' + loginColor + '.svg'" alt="atlantis" />
        </div>
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
                        <i class="pi pi-book"></i>
                        <InputText type="name" placeholder="Name" v-model="userData.name" />
                    </span>
                </div>
                <div class="form-container">
                    <span class="p-input-icon-left">
                        <i class="pi pi-key"></i>
                        <InputText type="password" placeholder="Password" v-model="userData.password" />
                    </span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-key"></i>
                        <InputText type="password" placeholder="Confirm Password" v-model="userData.confirmPassword" />
                    </span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-phone"></i>
                        <InputText type="phone" placeholder="Phone" v-model="userData.phone" />
                    </span>
                </div>
                <div class="flex">
                    <div class="field-checkbox">
                        <Checkbox inputId="binary" v-model="userData.checked" :binary="true" />
                    </div>
                    <span style="font-weight: 500; color: gray">I accept the terms of use.</span>
                </div>

                <div class="button-container">
                    <Button :disabled="validFields" type="button" @click="handleSubmit" label="Register"></Button>
                    <span>Already have an account?<a href="/login">Login</a></span>
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
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            disabled: true,

            userData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
                checked: false,
            },
        };
    },
    methods: {
        handleSubmit() {
            if (this.userData.name && this.userData.email && this.userData.password && this.userData.confirmPassword && this.userData.phone) {
                console.log(this.userData);
                axios
                    .post('/api/submit', this.userData)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                console.log('Please fill all the fields');
            }
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
            return this.userData.name.trim() === '' || this.userData.email.trim() === '' || this.userData.password.trim() === '' || this.userData.confirmPassword.trim() === '' || this.userData.phone.trim() === '' || this.userData.checked == false;
        },
    },
};
</script>
