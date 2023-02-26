<template>
    <div :class="['layout-inline-menu', { 'layout-inline-menu-active': activeInlineProfile }]" v-if="!isMobile() && (isStatic() || isSlim() || isSidebar())">
        <a class="layout-inline-menu-action" @click="onChangeActiveInlineMenu">
            <span class="layout-inline-menu-text">{{ user?.name }}</span>
            <i class="layout-inline-menu-icon pi pi-angle-down"></i>
        </a>

        <transition name="layout-inline-menu-action-panel">
            <ul v-show="activeInlineProfile" class="layout-inline-menu-action-panel">
                <li class="layout-inline-menu-action-item">
                    <a @click="processLogout">
                        <i class="pi pi-power-off pi-fw"></i>
                        <span>Logout</span>
                    </a>
                </li>
                <li class="layout-inline-menu-action-item">
                    <a href="/editProfile">
                        <i class="pi pi-user pi-fw"></i>
                        <span>Profile</span>
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppInlineMenu',
    emits: ['change-inlinemenu'],
    props: {
        menuMode: String,
        activeInlineProfile: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        ...mapActions('auth', ['logout']),
        processLogout() {
            this.logout();
            this.$router.push('/login');
        },
        onChangeActiveInlineMenu(event) {
            this.$emit('change-inlinemenu', event);
            event.preventDefault();
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
        ...mapGetters('auth', ['user']),
    },
};
</script>

<style scoped></style>
