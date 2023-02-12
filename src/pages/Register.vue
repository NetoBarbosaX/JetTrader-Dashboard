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
                        <InputText value="" type="text" placeholder="Email" />
                    </span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-book"></i>
                        <InputText value="" type="name" placeholder="Name" />
                    </span>
                </div>
                <div class="form-container">
                    <span class="p-input-icon-left">
                        <i class="pi pi-key"></i>
                        <InputText value="" type="password" placeholder="Password" />
                    </span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-phone"></i>
                        <InputText value="" type="phone" placeholder="Phone" />
                    </span>
                </div>
                <div class="flex">
                    <div class="field-checkbox">
                        <Checkbox inputId="binary" v-model="checked" :binary="true" />
                        <label for="binary">{{ checked }}</label>
                    </div>
                    <span style="font-weight: 500; color: gray">I accept the terms of use.</span>
                </div>
                <div class="button-container">
                    <router-link to="/verification">
                        <Button type="button" label="Register"></Button>
                    </router-link>
                    <span>Already have an account?<a href="/login">Login</a></span>
                </div>
            </div>

            <div class="login-footer flex align-items-center">
                <div class="flex align-items-center login-footer-logo-container">
                    <img :src="'layout/images/logo-' + color + '.svg'" class="login-logo" style="width: 30px" />
                    <img :src="'layout/images/appname-' + color + '.svg'" class="login-appname" style="width: 120px" />
                </div>
                <span>Copyright 2021</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
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
};
</script>
