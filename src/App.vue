<template>
    <div :class="layoutContainerClass" @click="onDocumentClick">
        <div class="layout-main">
            <AppTopBar
                :items="menu"
                :menuMode="menuMode"
                :colorScheme="colorScheme"
                :menuActive="menuActive"
                :topbarMenuActive="topbarMenuActive"
                :activeInlineProfile="activeInlineProfile"
                @topbar-item-click="onTopbarItemClick"
                @menubutton-click="onMenuButtonClick"
                @sidebar-mouse-over="onSidebarMouseOver"
                @sidebar-mouse-leave="onSidebarMouseLeave"
                @toggle-menu="onToggleMenu"
                @change-inlinemenu="onChangeActiveInlineMenu"
                @menu-click="onMenuClick"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            />

            <AppMenu
                :model="admin ? menuAdmin : menu"
                :menuMode="menuMode"
                :colorScheme="colorScheme"
                :menuActive="menuActive"
                :sidebarActive="sidebarActive"
                :sidebarStatic="sidebarStatic"
                :pinActive="pinActive"
                :activeInlineProfile="activeInlineProfile"
                @sidebar-mouse-over="onSidebarMouseOver"
                @sidebar-mouse-leave="onSidebarMouseLeave"
                @toggle-menu="onToggleMenu"
                @change-inlinemenu="onChangeActiveInlineMenu"
                @menu-click="onMenuClick"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            />

            <AppBreadcrumb :menuMode="menuMode" v-model:searchActive="searchActive" v-model:searchClick="searchClick" @menubutton-click="onMenuButtonClick" @rightmenu-button-click="onRightMenuButtonClick" />

            <div class="layout-main-content">
                <router-view />
            </div>

            <AppFooter :colorScheme="colorScheme" />
        </div>

        <AppRightMenu :rightMenuActive="rightMenuActive" @rightmenu-click="onRightMenuClick" @rightmenu-active="onChangeRightMenuActive" />
        <!-- 
		<AppConfig v-model:menuMode="menuMode" :theme="theme" :componentTheme="componentTheme" :colorScheme="colorScheme" :configActive="configActive" :configClick="configClick"
			@config-button-click="onConfigButtonClick" @config-click="onConfigClick" @change-color-scheme="onChangeColorScheme" @change-component-theme="onChangeComponentTheme" @change-menu-theme="onChangeMenuTheme"
			@change-menu-mode="onChangeMenuMode" /> -->
    </div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppMenu from './AppMenu.vue';
import AppRightMenu from './AppRightMenu.vue';
import AppFooter from './AppFooter.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
// import AppConfig from './AppConfig.vue';
import EventBus from './event-bus';

export default {
    emits: ['layout-mode-change', 'menu-theme', 'layoutModeChange', 'sidebar-mouse-over', 'sidebar-mouse-leave', 'change-color-scheme', 'change-component-theme', 'change-menu-theme', 'change-inlinemenu'],
    props: {
        colorScheme: String,
        topbarTheme: String,
        theme: String,
        componentTheme: String,
    },
    data() {
        return {
            admin: false,
            search: false,
            searchClick: false,
            searchActive: false,
            menuMode: 'sidebar',
            menuActive: false,
            activeInlineProfile: false,
            inlineMenuClick: false,
            overlayMenuActive: false,
            topbarMenuActive: false,
            topbarItemClick: false,
            sidebarActive: false,
            sidebarStatic: false,
            pinActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            rightMenuClick: false,
            rightMenuActive: false,
            configActive: false,
            configClick: false,
            menu: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Risk profile', icon: 'pi pi-fw pi-briefcase', to: '/riskProfile' },
                { label: 'MT4 Registration', icon: 'pi pi-book', to: '/registerMT4' },
                { label: 'Payments', icon: 'pi pi-fw pi-dollar', to: '/payments' },
                { label: 'Tickets', icon: 'pi pi-fw pi-exclamation-circle', to: '/tickets' },
            ],
            menuAdmin: [
                { label: 'Dashboard Admin', icon: 'pi pi-fw pi-home', to: '/dashboardAdmin' },
                { label: 'Users', icon: 'pi pi-fw pi-cog', to: '/usersAdmin' },
                { label: 'Finance', icon: 'pi pi-fw pi-money-bill', to: '/finance' },
            ],
        };
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        },
    },
    methods: {
        onDocumentClick() {
            if (!this.searchClick && this.searchActive) {
                this.onSearchHide();
            }

            if (!this.topbarItemClick) {
                this.topbarMenuActive = false;
            }

            if (!this.menuClick) {
                if (this.isHorizontal() || this.isSlim()) {
                    this.menuActive = false;
                    EventBus.emit('reset-active-index');
                }

                if (this.overlayMenuActive || this.staticMenuMobileActive) {
                    this.overlayMenuActive = false;
                    this.staticMenuMobileActive = false;
                }

                this.hideOverlayMenu();
                this.unblockBodyScroll();
            }

            if (!this.rightMenuClick) {
                this.rightMenuActive = false;
            }

            if (this.configActive && !this.configClick) {
                this.configActive = false;
            }

            this.topbarItemClick = false;
            this.menuClick = false;
            this.configClick = false;
            this.rightMenuClick = false;
            this.searchClick = false;
            this.inlineMenuClick = false;
        },
        onSearchHide() {
            this.searchActive = false;
            this.searchClick = false;
        },
        onSidebarMouseOver() {
            if (this.menuMode === 'sidebar' && !this.sidebarStatic) {
                this.sidebarActive = this.isDesktop();
                setTimeout(() => {
                    this.pinActive = this.isDesktop();
                }, 200);
            }
        },
        onSidebarMouseLeave() {
            if (this.menuMode === 'sidebar' && !this.sidebarStatic) {
                setTimeout(() => {
                    this.sidebarActive = false;
                    this.pinActive = false;
                }, 250);
            }
        },
        hideOverlayMenu() {
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        },
        onMenuButtonClick(event) {
            this.menuClick = true;

            if (this.isOverlay()) {
                this.overlayMenuActive = !this.overlayMenuActive;
            }

            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            } else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }

            event.preventDefault();
        },
        onTopbarItemClick(event) {
            this.topbarItemClick = true;
            this.topbarMenuActive = !this.topbarMenuActive;
            this.hideOverlayMenu();
            event.preventDefault();
        },
        onRightMenuButtonClick() {
            this.rightMenuClick = true;
            this.rightMenuActive = true;
        },
        onRightMenuClick() {
            this.rightMenuClick = true;
        },
        onMenuClick() {
            this.menuClick = true;
        },
        onRootMenuItemClick() {
            this.menuActive = !this.menuActive;
        },
        onMenuItemClick(event) {
            if (!event.item.items) {
                this.hideOverlayMenu();
                EventBus.emit('reset-active-index');
            }

            if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
                this.menuActive = false;
            }
        },
        onChangeMenuMode(menuMode) {
            this.menuMode = menuMode;
            this.overlayMenuActive = false;
        },
        onConfigClick() {
            this.configClick = true;
        },
        onConfigButtonClick(event) {
            this.configActive = !this.configActive;
            this.configClick = true;
            event.preventDefault();
        },
        onChangeRightMenuActive(active) {
            this.rightMenuActive = active;
        },
        onChangeMenuTheme(theme) {
            this.$emit('change-menu-theme', theme);
        },
        onChangeComponentTheme(theme) {
            this.$emit('change-component-theme', theme);
        },
        onChangeColorScheme(scheme) {
            this.$emit('change-color-scheme', scheme);
        },
        onToggleMenu(event) {
            this.menuClick = true;

            if (this.overlayMenuActive) {
                this.overlayMenuActive = false;
            }

            if (this.sidebarActive) {
                this.sidebarStatic = !this.sidebarStatic;
            }

            event.preventDefault();
        },
        onChangeActiveInlineMenu() {
            this.activeInlineProfile = !this.activeInlineProfile;
        },
        blockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.add('blocked-scroll');
            } else {
                document.body.className += ' blocked-scroll';
            }
        },
        unblockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.remove('blocked-scroll');
            } else {
                document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },
        isHorizontal() {
            return this.menuMode === 'horizontal';
        },
        isSlim() {
            return this.menuMode === 'slim';
        },
        isOverlay() {
            return this.menuMode === 'overlay';
        },
        isStatic() {
            return this.menuMode === 'static';
        },
        isSidebar() {
            return this.menuMode === 'sidebar';
        },
        isDesktop() {
            return window.innerWidth > 991;
        },
        isMobile() {
            return window.innerWidth <= 991;
        },
    },
    computed: {
        layoutContainerClass() {
            return [
                'layout-wrapper',
                {
                    'layout-static': this.menuMode === 'static',
                    'layout-overlay': this.menuMode === 'overlay',
                    'layout-overlay-active': this.overlayMenuActive,
                    'layout-slim': this.menuMode === 'slim',
                    'layout-horizontal': this.menuMode === 'horizontal',
                    'layout-active': this.menuActive,
                    'layout-mobile-active': this.staticMenuMobileActive,
                    'layout-sidebar': this.menuMode === 'sidebar',
                    'layout-sidebar-static': this.menuMode === 'sidebar' && this.sidebarStatic,
                    'layout-static-inactive': this.staticMenuDesktopInactive && this.menuMode === 'static',
                    'p-ripple-disabled': this.$primevue.config.ripple === false,
                },
            ];
        },
    },
    components: {
        AppTopBar,
        AppMenu,
        AppRightMenu,
        AppFooter,
        AppBreadcrumb,
        // AppConfig
    },
};
</script>
