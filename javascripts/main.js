let header=()=>{


  let txt="<a href=\"index.html\" class=\"w3-bar-item w3-button w3-wide class=\"WHITEBOARD\">WHITEBOARD</a>\
  <div class=\"header-right\">\
    <a href=\"login.html\" class=\"w3-bar-item w3-button\"> Login</a>\
    <a href=\"notes.html\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-th\"></i> Notes</a>\
    <a href=\"upgrade.html\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-usd\"></i> Upgrade</a>\
	<a href=\"query.html\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-envelope\"></i> Query</a>\
	<a href=\"team.html\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-user\"></i> TEAM</a>\
  </div>"
  let h=document.getElementsByClassName("header")[0];
  h.innerHTML=txt;

}
header();