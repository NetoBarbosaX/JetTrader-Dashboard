<template>
    <div class="login-body">
        <div class="login-panel p-fluid">
            <div class="flex flex-column">
                <div class="flex align-items-center mb-6 logo-container">
                    <img :src="'layout/images/logo-' + color + '.svg'" class="login-logo" />
                    <img :src="'layout/images/appname-' + color + '.svg'" class="login-appname" />
                </div>
                <div v-if="validEmail === 1" style="border-radius: 10px; background: #f6e3c3; width: 319px; padding-bottom: 50px; padding-top: 50px; margin-bottom: 15px" value="" aria-label="Tabable Primary Tag" tabindex="0">
                    <span style="font-weight: 600; color: black">Click to validate email</span>
                    <div style="text-align: center">
                        <Button @click="processLogin()" style="width: 50%; background: rgb(46, 199, 114)" label="Submit" />
                    </div>
                </div>
                <div v-else-if="validEmail === 2" class="button-container">
                    <div style="border-radius: 20px; background: #2ec772; width: 319px; padding-bottom: 50px; padding-top: 50px; margin-bottom: 15px" class="mr-2" value="" aria-label="Tabable Primary Tag" tabindex="0">
                        <div class="block">
                            <span>Email verified, go to your Login!</span>
                        </div>
                    </div>
                    <router-link to="/login">
                        <Button type="button" style="" label="Continue"></Button>
                    </router-link>
                </div>
                <div v-else class="button-container">
                    <div style="border-radius: 20px; background: #f52e07; width: 319px; padding-bottom: 50px; padding-top: 50px; margin-bottom: 15px" class="mr-2" value="" aria-label="Tabable Primary Tag" tabindex="0">
                        <div class="block">
                            <span>Error verifying email, contact our support at email: support@jettrader.pro</span>
                        </div>
                    </div>
                    <router-link to="/login">
                        <Button type="button" style="" label="Continue"></Button>
                    </router-link>
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
import { useRoute } from 'vue-router';
import AUTH from '@/service/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            id: '',
            validEmail: 1,
        };
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
        verifyID() {
            return console.log(this.selectedId);
        },
    },
    methods: {
        async processLogin() {
            try {
                await AUTH.validateEmail(this.validateId);
                this.validEmail = 2;
            } catch (error) {
                this.validEmail = 3;
            }
        },
    },
    setup() {
        const route = useRoute();
        console.log(route.query.id);
        var validateId = route.query.id;
        return { validateId };
    },
};
</script>

<style>
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
    color: white;
    font-weight: 700;
}
</style>
