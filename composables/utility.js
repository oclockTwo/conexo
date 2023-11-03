export function goHome() {
  if(process.client) {
    window.location.href = "/";
  }
}