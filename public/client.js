function askName() {
    var username = prompt("What's your username?");
    if (username === "null" || username === null || username === "" ) {
        alert('Please insert your name!');
        askName();
    } else {
      localStorage.setItem("name", username);
    }
  }
  if (localStorage.getItem("name") === null) {          
      askName();
  }
  $(function () {
    var socket = io();
    $("form").submit(function (data) {
    data.name = localStorage.getItem("name");
    data.msg= $("#content").val();
    socket.emit("chat_message", data);
    // socket.emit("name", localStorage.getItem("name"));

      $("#content").val("");
      return false;
    });

    socket.on("chat_message", function (data) {
      $("#messages").append(
        '<li><FONT COLOR="red">' + data.name + ':</FONT> ' + data.msg + '</li>'
      );
      console.log("receive message from other client " + data.name + " - message: " + data.msg);
    });
  });