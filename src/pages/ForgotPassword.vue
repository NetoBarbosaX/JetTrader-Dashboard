<template>
    <div class="login-body" style="justify-content: right">
        <div>
            <div class="login-panel p-fluid">
                <div class="flex flex-column">
                    <div class="flex align-items-center mb-6 logo-container">
                        <img :src="'layout/images/logo-' + color + '.svg'" class="login-logo" />
                        <img :src="'layout/images/appname-' + color + '.svg'" class="login-appname" />
                    </div>
                    <div v-show="!checked">
                        <div style="text-align-last: left; padding-bottom: 10px">
                            <span style="font-weight: 400; color: #868c9b">Enter your email so we can send you the authentication code. to the.</span>
                        </div>
                        <div class="form-container">
                            <span class="p-input-icon-left">
                                <i class="pi pi-envelope"></i>
                                <InputText v-model="userData.email" type="text" placeholder="Email" />
                            </span>
                        </div>
                        <div class="button-container">
                            <Button @click="handleSubmit()" type="button" label="Submit"></Button>
                            <span>Back to <a href="/login">login</a></span>
                        </div>
                    </div>
                    <div v-show="checked" class="form-container">
                        <div style="text-align: start" class="form-container">
                            <Tag style="background: rgb(46, 199, 114); width: 319px; padding-bottom: 50px; padding-top: 50px; margin-bottom: 15px" class="mr-2" value="Email successfully sent" aria-label="Tabable Primary Tag" tabindex="0"></Tag>
                        </div>
                        <div class="button-container">
                            <Button type="button" label="Submit"></Button>
                            <span>Back to <a href="/login">login</a></span>
                        </div>
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
            checked: false,
            userData: {
                email: '',
            },
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
    },
    methods: {
        submit() {
            this.checked = true;
        },
        handleSubmit() {
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
};
</script>
