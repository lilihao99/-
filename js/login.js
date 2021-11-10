var login = document.getElementById("login");
var gb_btn = document.getElementById("gb-btn");
var login_btn = document.getElementById("login-btn");

login_btn.onclick = function()
{
    login.style.display = "block";
}
gb_btn.onclick = function()
{
    login.style.display = "none";
}