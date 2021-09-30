const socket = io("http://localhost:3000");

socket.on("connect",()=>{
    console.log("connect socket started",socket.id);
})

socket.emit("send-message",{message:"huy day"})

