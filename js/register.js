var register = document.getElementById("register");
var gb1_btn = document.getElementById("gb1-btn");
var register_btn = document.getElementById("register-btn");

register_btn.onclick = function()
{
    register.style.display = "block";
}
gb1_btn.onclick = function()
{
    register.style.display = "none";
}