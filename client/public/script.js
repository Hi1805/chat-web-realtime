
const btnSend = document.querySelector("#btn-send");
const message = document.getElementById("message");
const contentBox = document.querySelector(".content");
console.log(message);
const socket = io("https://chat-realtime-01.herokuapp.com");

socket.on("connect",()=>{
    console.log("connect socket started",socket.id);
})

socket.on("on-chat",data=>{
    console.log("data",data);
    const chatItem = document.createElement("li");;
    if(socket.id == data.id){
        chatItem.style.textAlignLast="right";
        chatItem.style.textAlign="right";
        chatItem.textContent = `${data.message}`;
        chatItem.classList.add("mine-chat");
    }
    else
    chatItem.textContent = `${data.name} : ${data.message}`;

    contentBox.appendChild(chatItem);
})
const nameUser = prompt("Xin Vui Lòng Nhập Tên");

btnSend.addEventListener("click",e=>{
    const contentMessage = message.value;
    const data = {
        message:contentMessage,
        id:socket.id,
        name:nameUser
    }
    if(contentMessage){
        socket.emit("send-message",data)
        message.value=""
    }
        
})

