import store from "../store";

export default () => (to, from, next) => {
  if (!store.getters["auth/isAuthenticated"]) {
    return next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }
  next();
};