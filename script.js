
let socket = new WebSocket("ws://127.0.0.1:8080/ws")

socket.addEventListener('open', function (event) {
    console.debug("Sucess WS Connect")
});

socket.onmessage = (e) => {
  console.debug(e)
}
