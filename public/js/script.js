var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
user ={'message':""}

sendBtn.addEventListener("click", function(e){

    var user_message = textbox.value;
    if (user_message != ""){
        let user_message_text = user_message.trim()
        alert(user_message_text)
        textbox.value = ""

        user['message'] = user_message_text
        console.log(user)
    }
    else{
        alert("Please enter a message")
    }
    
})