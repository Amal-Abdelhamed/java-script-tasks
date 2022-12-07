var response = prompt("Enter your name");
if (response) {
    document.write("welcome " + response + " :) ")
} else {
    alert("you haven't entered any name :( ")
};
var favColor = prompt("select your favorite color from (1-red / 2-blue / 3-yellow)");
var color;
var flag = true
switch (favColor) {
    case "1":
        color = "red"
        break;
    case "2":
        color = "blue"

        break;
    case "3":
        color = "yellow"

        break;
    default:
        flag = false
        alert(response + ", your favorite color isn't from the given list ")

}

flag ? document.write("your favorite color is " + color) : '';
