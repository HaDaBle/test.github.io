const loginForm = document.querySelector("#login-form"); 
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY='username';
function onLoginSubmit(event)
{
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
   paintGreetings(username);

}
function paintGreetings(username)
{
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName===null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else
{
    paintGreetings(savedUserName);
}
/*function handleLinkClick(event)
{
    event.preventDefault();

    alert("clicked");

}
link.addEventListener("click",handleLinkClick) 
*/
loginForm.addEventListener("submit",onLoginSubmit);
