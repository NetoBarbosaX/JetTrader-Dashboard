<template>
	<div class="layout-footer">
        <div class="footer-logo-container">
            <img id="footer-logo" :src="'layout/images/logo-'+ (colorScheme === 'light' ? 'dark' : 'light') + '.svg'" alt="atlantis-layout"/>
            <span class="app-name">Jet Trader</span>
        </div>
        <span class="copyright">&#169; JetTrader - 2023</span>
    </div>
</template>

<script>
export default {
	props: {
		colorScheme: String
	}
}
</script>

