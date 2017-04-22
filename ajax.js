function ajax(opts){
  var defaults = {
    method: 'GET',
    url: '',
    data: '',
    async: true,
    success: function() {},
    error: function() {
      console.log('有错误');
    },
  };
  for(var key in opts){
    defaults[key] = opts[key];
  }

  //if window.XMLHttpRequest  code for IE7+, Firefox, Chrome, Opera, Safari
  //else if code for IE6, IE5
  var oXhr = window.XMLHttpRequest ? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");

  if(defaults.method.toUpperCase() == 'POST'){
    oXhr.open(defaults.method ,defaults.url, defaults.async);
    oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    oXhr.send(defaults.data);
  }
  else if(defaults.method.toUpperCase() == 'GET'){
    oXhr.open(defaults.method, defaults.url + '?' + defaults.data, defaults.async);
    
    oXhr.send();
  }
  oXhr.onreadystatechange=function()
  {
    if (oXhr.readyState==4 && oXhr.status==200){
      defaults.success.call(oXhr,oXhr.responseText);
    }
  }
}
