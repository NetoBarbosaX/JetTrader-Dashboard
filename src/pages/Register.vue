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
                            <i class="pi pi-book"></i>
                            <InputText type="text" placeholder="Name" v-model="userData.name" />
                        </span>
                    </div>
                    <div class="form-container">
                        <span class="p-input-icon-left">
                            <i class="pi pi-key"></i>
                            <InputText type="password" placeholder="Password" v-model="userData.password" />
                        </span>
                        <span class="p-input-icon-left">
                            <i class="pi pi-key"></i>
                            <InputText type="password" placeholder="Confirm Password" v-model="confirmPassword" />
                        </span>
                        <span class="p-input-icon-left">
                            <i class="pi pi-phone"></i>
                            <InputMask mask="99-999999999" type="phone" placeholder="Phone" v-model="userData.cellphone" />
                        </span>
                    </div>
                    <div class="flex">
                        <div class="field-checkbox">
                            <Checkbox inputId="binary" v-model="checked" :binary="true" />
                        </div>
                        <span style="font-weight: 500; color: gray">I accept the terms of use.</span>
                    </div>

                    <div class="button-container">
                        <Button :disabled="validFields" type="button" @click="handleSubmit" label="Register"></Button>
                        <span>Already have an account?<a href="/login">Login</a></span>
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
import AUTH from '@/service/auth';

export default {
    data() {
        return {
            confirmPassword: '',
            checked: false,
            disabled: true,
            userData: {
                name: '',
                email: '',
                password: '',
                cellphone: '',
            },
        };
    },
    methods: {
        ...mapActions('auth', ['register']),
        async handleSubmit() {
            if (!this.validFields) {
                console.log(this.userData);
                try {
                    await this.register(this.userData);
                    await AUTH.activateAccount(this.userData.email);
                    this.$router.push('/verification');
                } catch (error) {
                    alert(error.menssage);
                }
            } else {
                console.log('Please fill all the fields');
            }
        },
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
            return this.userData.name.trim() === '' || this.userData.email.trim() === '' || this.userData.password.trim() === '' || this.confirmPassword.trim() === '' || this.userData.cellphone.trim() === '' || this.checked == false;
        },
    },
};
</script>
