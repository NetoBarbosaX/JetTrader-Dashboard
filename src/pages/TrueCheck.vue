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
                <div class="button-container">
                    <div style="border-radius: 20px; background: #2ec772; width: 319px; padding-bottom: 50px; padding-top: 50px; margin-bottom: 15px" class="mr-2" value="" aria-label="Tabable Primary Tag" tabindex="0">
                        <div class="block">
                            <div>
                                <img style="" :src="'layout/images/positiveIcon.svg'" class="login-appname" />
                            </div>
                            <span>Email verified, go to your Dashboard!</span>
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

<style>
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
    color: white;
    font-weight: 700;
}
</style>
