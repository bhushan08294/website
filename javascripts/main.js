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
let footer=()=>{

  let txt="<a href=\"index.html\"</a>\
   <div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:0px 48px">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
</div>
  let h=document.getElementsByClassName("footer")[0];
  h.innerHTML=txt;

}

footer();