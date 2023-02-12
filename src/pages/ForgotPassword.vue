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
                <div v-show="!checked">
                    <div style="text-align-last: left; padding-bottom: 10px">
                        <span style="font-weight: 400; color: #868c9b">Enter your email so we can send you the authentication code. to the.</span>
                    </div>
                    <div class="form-container">
                        <span class="p-input-icon-left">
                            <i class="pi pi-envelope"></i>
                            <InputText value="" type="text" placeholder="Email" />
                        </span>
                    </div>
                    <div class="button-container">
                        <Button @click="submit()" type="button" label="Submit"></Button>
                        <span>Back to <a href="/login">login</a></span>
                    </div>
                </div>
                <div v-show="checked" class="form-container">
                    <div style="text-align: start" class="form-container">
                        <Tag
                            style="background: rgb(46, 199, 114); width: 319px; padding-bottom: 50px; padding-top: 50px; margin-bottom: 15px"
                            class="mr-2"
                            value="Email successfully sent"
                            aria-label="Tabable Primary Tag"
                            tabindex="0"
                        ></Tag>
                    </div>
                    <div class="button-container">
                        <Button @click="submit()" type="button" label="Submit"></Button>
                        <span>Back to <a href="/login">login</a></span>
                    </div>
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
            checked: false,
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
    methods: {
        submit() {
            this.checked = true;
        },
    },
};
</script>
