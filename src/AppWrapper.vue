<template>
    <Login v-if="$route.path === '/login'" />
    <Error v-else-if="$route.path === '/error'" />
    <Verification v-else-if="$route.path === '/verification'" />
    <ForgotPassword v-else-if="$route.path === '/forgotPassword'" />
    <TrueCheck v-else-if="$route.path === '/trueCheck'" />
    <Register v-else-if="$route.path === '/register'" />
    <Access v-else-if="$route.path === '/access'" />
    <NotFound v-else-if="$route.path === '/notfound'" />
    <App :theme="theme" :colorScheme="colorScheme" :componentTheme="componentTheme"
        @change-color-scheme="onChangeColorScheme" @change-component-theme="onChangeComponentTheme" @change-menu-theme="onChangeMenuTheme" v-else />
</template>

<script>
    import App from './App.vue';
    import Error from './pages/Error';
    import Access from './pages/Access';
    import Login from './pages/Login';
    import ForgotPassword from './pages/ForgotPassword';
    import Verification from './pages/Verification';
    import TrueCheck from './pages/TrueCheck';
    import Register from './pages/Register';
    import NotFound from './pages/NotFound';

	export default {
        data() {
            return {
                theme: 'blue',
                componentTheme: 'blue',
                colorScheme: 'dark',
            }
        },
        methods: {
            onChangeColorScheme(scheme) {
                this.changeStyleSheetUrl('layout-css', 'layout-' + scheme + '.css', 1);
                this.changeStyleSheetUrl('theme-css', 'theme-' + scheme + '.css', 1);
                this.colorScheme = scheme;
                this.$appState.colorScheme = scheme;
            },
            onChangeMenuTheme(theme) {
                const layoutLink = document.getElementById('layout-css');
                const href = 'layout/css/' + theme + '/layout-' + this.colorScheme + '.css';

                this.replaceLink(layoutLink, href);
                this.theme = theme;
            },
            onChangeComponentTheme(theme) {
                const themeLink = document.getElementById('theme-css');
                const href = 'theme/' + theme + '/theme-' + this.colorScheme + '.css';

                this.replaceLink(themeLink, href);
                this.componentTheme = theme;
            },
            changeStyleSheetUrl(id, value, from) {
                const element = document.getElementById(id);
                const urlTokens = element.getAttribute('href').split('/');

                if (from === 1) {           // which function invoked this function - change scheme
                    urlTokens[urlTokens.length - 1] = value;
                } else if (from === 2) {       // which function invoked this function - change color
                    urlTokens[urlTokens.length - 2] = value;
                }

                const newURL = urlTokens.join('/');

                this.replaceLink(element, newURL);
            },
            replaceLink(linkElement, href,callback) {
                const id = linkElement.getAttribute('id');
                const cloneLinkElement = linkElement.cloneNode(true);

                cloneLinkElement.setAttribute('href', href);
                cloneLinkElement.setAttribute('id', id + '-clone');

                linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

                cloneLinkElement.addEventListener('load', () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute('id', id);

                    if (callback) {
                        callback();
                    }
                });
            }
        },
        components: {
            'App': App,
            'Error': Error,
            'Access': Access,
            'Login': Login,
            'ForgotPassword': ForgotPassword,
            'Register': Register,
            'NotFound': NotFound,
            'Verification': Verification,
            'TrueCheck': TrueCheck,
        }
	}
</script>

<style scoped>
</style>
