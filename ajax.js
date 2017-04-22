function ajax(opts){
  var defaults = {
    method: 'GET',
    url: '',
    success: function() {},
    error: function() {},
  };
  for(var key in opts){
    defaults[key] = opts[key];
  }

  //if window.XMLHttpRequest  code for IE7+, Firefox, Chrome, Opera, Safari
  //else if code for IE6, IE5
  var oXhr = window.XMLHttpRequest ? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
  oXhr.open(defaults.method ,defaults.url, true);
  oXhr.send();
  oXhr.onreadystatechange=function()
  {
    if (oXhr.readyState==4 && oXhr.status==200){
      defaults.success.call(oXhr,oXhr.responseText);
    }
    else{
      defaults.error();
    }
  }
}
