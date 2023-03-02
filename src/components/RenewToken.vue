<template>
  <div />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    interval: null,
    isHidden: false,
  }),
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["renewToken"]),
    async rToken() {
      let response =
        this.isHidden || !this.isAuthenticated || (await this.renewToken());
      if (response) return true;
      if (this.$route.name == "sign-in") return false;
      let currentUrl = this.$route.fullPath;
      this.$router.push({
        path: "/login",
        query: { redirect: currentUrl },
      });
      return false;
    },
    changeVisibility() {
      this.isHidden = document.hidden;
      if (!this.isHidden) this.rToken();
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.rToken();
    }, 120000);
  },
  async beforeMount() {
    await this.rToken();
    document.addEventListener("visibilitychange", this.changeVisibility);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style></style>