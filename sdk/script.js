(function (global) {
  class AdMerito {
    constructor() {
      this.apikey = "";
      this.socket = null;
    }

    init(apiKey) {
      if (!apiKey) {
        throw new Error("AdMerito: connection failed: missing api key");
        return;
      }
      this.apikey = apiKey;
      this.setupConnection("http://localhost:3000/api/socket");
    }

    setupConnection(ws) {
      this.socket = new WebSocket(`${ws}?apikey=${this.apikey}`);

      this.socket.onopen = () => {
        console.log("AdMerito: Connection established");
      };

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("AdMerito: Welcome to our Portal");
      };

      this.socket.onerror = (error) => {
        console.error("AdMerito: Exception: ", error);
      };

      this.socket.onclose = () => {
        console.warn("AdMerito: Connection failure. retrying...");
        setTimeout(() => {
          this.setupConnection(ws);
        }, 3000);
      };
    }
  }
  global.AdMerito = new AdMerito();
})(window);
