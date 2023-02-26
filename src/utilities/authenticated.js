import store from "../store";

export default (options) => (to, from, next) => {
  if (!store.getters["auth/isAuthenticated"]) {
    return next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }

  if (!store.getters["auth/user"].validateEmail && !options?.skipEmail) {
    return next({
      path: "/verification",
      query: { redirect: to.fullPath },
    });
  }
  next();
};