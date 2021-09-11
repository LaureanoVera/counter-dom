if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Service Worker", reg))
    .catch((err) => console.warn("Error", err));
}
