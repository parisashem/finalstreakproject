window.addEventListener('load', function () {

    let socket = io();
  
    socket.on('connect', function () {
        console.log("Connected");
    });


    let chatBox = document.getElementById('chat-box-msgs');

    socket.on('msg', function (data) {
        console.log("Message arrived!");
        if (data.id === 1) {
            
            let receivedMsg = data.name + ": " + data.msg;
            let msgEl = document.createElement('p');
            msgEl.innerHTML = receivedMsg;

            
            chatBox.appendChild(msgEl);
           
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        console.log(data);
    });

    
    let nameInput = document.getElementById('name-input')
    let msgInput = document.getElementById('msg-input');
    let sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        let curName = nameInput.value;
        let curMsg = msgInput.value;
        let msgObj = { "name": curName, "msg": curMsg, "id": 1 };
 
        
        socket.emit('msg', msgObj);
    });

});