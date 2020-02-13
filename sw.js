self.addEventListener("push", (payload) => {
  self.registration.showNotification("test message", payload);
});
