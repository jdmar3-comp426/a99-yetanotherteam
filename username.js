$(document).ready(function () {
  $("#Change_Username_Text").click(function () {
    userinput = $("<input>", {
      val: $("#abcd123_Text  span").text(),
      type: "text",
      id: "abcd123_Text",
    });
    Save_Button.style.display = "inline-block";
    $("#abcd123_Text").replaceWith(userinput);
    userinput.select();
  });

  $("#Change_Password_Text").click(function () {
    var passwordinput = $("<input>", {
      val: $("#password123_Text  span").text(),
      type: "text",
      id: "password123_Text",
    });
    Save_Button.style.display = "inline-block";
    $("#password123_Text").replaceWith(passwordinput);
    passwordinput.select();
  });

  $("#Change_Email_Text").click(function () {
    var passwordinput = $("<input>", {
      val: $("#comp126_Text  span").text(),
      type: "text",
      id: "comp126_Text",
    });
    Save_Button.style.display = "inline-block";
    $("#comp126_Text").replaceWith(passwordinput);
    passwordinput.select();
  });

  $("#Save_Button").click(function () {
    var userText = $("<span>", {
      text: $("#abcd123_Text").val(),
      id: "abcd123_Text",
    });
    $("#abcd123_Text").replaceWith(userText);

    var passText = $("<span>", {
      text: $("#password123_Text").val(),
      id: "password123_Text",
    });
    $("#password123_Text").replaceWith(passText);

    var emailText = $("<span>", {
      text: $("#comp126_Text").val(),
      id: "comp126_Text",
    });
    $("#comp126_Text").replaceWith(emailText);
    Save_Button.style.display = "none";
  });
});
