$(function(){ //same as document.addEventListener("DOMContentLoaded",function())
  //similar to document.querySelector("#navbarToggle").addEventListener("blur",function(event))
  $("#navbarToggle").click(function(event){
    var screenWidth = window.innerWidth;
    if(screenWidth < 768){
      if($(".in")[0]){
        document.getElementById("create-dark").style.visibility = 'hidden';
      }else{
        document.getElementById("create-dark").style.visibility = 'visible';
      }
    }
  });
  $("#navbarToggle").blur(function(event){
    var screenWidth = window.innerWidth;
    if(screenWidth < 768){
      $("#collapsable-nav").collapse('hide');
      document.getElementById("create-dark").style.visibility = 'hidden';
    }
  });
});

function checkOnSubmit(){
  var userEmail = document.getElementById("subscription-form").email.value;
  var emailRegex = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(!emailRegex.test(userEmail)){
    document.getElementById("submit-error").innerHTML = 'Please provide a valid email!';
    return false;
  }else{
    document.getElementById("submit-error").innerHTML = 'Thanks for Subscribing';
  }
}
//Copy to clipboard handling script
function copyToClipBoard(x){
  var copyValue = document.getElementsByClassName('copyValue')[x];
  copyValue.select();
  copyValue.setSelectionRange(0, 99999)
  document.execCommand("copy");
  document.getElementsByClassName('copy-output')[x].innerHTML = "Copied!";
  document.getElementsByClassName('copy-button')[x].disabled = true;
  setTimeout(function(){
    document.getElementsByClassName('copy-output')[x].innerHTML = "";
    document.getElementsByClassName('copy-button')[x].disabled = false;
  },2000);
}
/*****darkmode and lightmode handling***********/
function startUpTheme(){
  function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
if(getCookie('theme')=='dark'){
  const theme = document.querySelector('#theme');
  const headerNavbar = document.querySelector("#header-navbar");
  const navList = document.querySelector("#navlist");
  const themeButton = document.querySelector("#theme-button");
  const bodyTheme = document.querySelector("#body-theme");
  const panelFooter = document.querySelector("#panel-footer");
  const content = document.querySelector("#content");
  themeButton.innerHTML = "Light Mode";
  theme.classList.remove("dark-theme");
  bodyTheme.classList.remove("light-theme-style");
  headerNavbar.classList.remove("light-theme-navbar");
  navList.classList.remove("light-theme-navlist");
  panelFooter.classList.remove("light-theme-footer");
  content.classList.remove("light-theme-content");
  theme.classList.add("light-theme");
  bodyTheme.classList.add("dark-theme-style");
  headerNavbar.classList.add("dark-theme-navbar");
  navList.classList.add("dark-theme-navlist");
  panelFooter.classList.add("dark-theme-footer");
  content.classList.add("dark-theme-content");
}
}
function handleThemes(){
  const theme = document.querySelector('#theme');
  const headerNavbar = document.querySelector("#header-navbar");
  const navList = document.querySelector("#navlist");
  const themeButton = document.querySelector("#theme-button");
  const bodyTheme = document.querySelector("#body-theme");
  const panelFooter = document.querySelector("#panel-footer");
  const content = document.querySelector("#content");
  if (theme.classList.contains("dark-theme")) {
    //setting cookie
    document.cookie = "theme=dark; path=/";
    //setting theme style
    themeButton.innerHTML = "Light Mode";
    theme.classList.remove("dark-theme");
    bodyTheme.classList.remove("light-theme-style");
    headerNavbar.classList.remove("light-theme-navbar");
    navList.classList.remove("light-theme-navlist");
    panelFooter.classList.remove("light-theme-footer");
    content.classList.remove("light-theme-content");
    theme.classList.add("light-theme");
    bodyTheme.classList.add("dark-theme-style");
    headerNavbar.classList.add("dark-theme-navbar");
    navList.classList.add("dark-theme-navlist");
    panelFooter.classList.add("dark-theme-footer");
    content.classList.add("dark-theme-content");
  }else if(theme.classList.contains("light-theme")){
    //setting cookie
    document.cookie = "theme=light; path=/";
    //setting theme style
    themeButton.innerHTML = "Dark Mode";
    theme.classList.remove("light-theme");
    bodyTheme.classList.remove('dark-theme-style');
    headerNavbar.classList.remove("dark-theme-navbar");
    navList.classList.remove("dark-theme-navlist");
    panelFooter.classList.remove("dark-theme-footer");
    content.classList.remove("dark-theme-content");
    theme.classList.add('dark-theme');
    bodyTheme.classList.add("light-theme-style");
    headerNavbar.classList.add("light-theme-navbar");
    navList.classList.add("light-theme-navlist");
    panelFooter.classList.add("light-theme-footer");
    content.classList.add("light-theme-content");
  }
}
