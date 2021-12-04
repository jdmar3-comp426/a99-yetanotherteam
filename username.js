$(document).ready(function () {
  $("#Change_Username_Text").click(function () {
    var userinput = $("<input>", {
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
});
