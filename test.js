const socket = new WebSocket(
  "ws://localhost:3000/api/socket?apiKey=YkbLp3VJ869Re5ayMctXvrKTmzqwB7g2P4AFSnGh"
);

// socket.onopen = () => console.log("✅ Connected to WebSocket");
// socket.onmessage = (event) =>
//   console.log("📡 Message from server:", event.data);
socket.onerror = (error) => console.error("❌ WebSocket error:", error);
// socket.onclose = () => console.warn("⚠️ WebSocket closed.");
