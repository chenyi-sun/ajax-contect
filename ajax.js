console.log("SSSSS");
function loadXMLDoc(){
  var xmlhttp;
  if(window.XMLHttpRequest)
  { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp = new ActiveXOject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
   {
   document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   }
  }
  xmlhttp.open("GET","test1.txt",true);
  xmlhttp.send();
}
