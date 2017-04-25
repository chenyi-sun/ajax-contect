function ajax(opts){
  var defaults = {
    method: 'GET',
    url: '',
    data: '',
    postData: '',
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

  //if data is object then change them to be string type
  //if data is string then post/get them
  if(typeof defaults.data == 'string'){
    defaults.postData = defaults.data;
  } else if(typeof defaults.data == "object"){
    var arr = [];
    for(item in defaults.data){
      var v = defaults.data[item];
      arr.push(item + "=" + v);
    }
    defaults.postData = arr.join("&");
  }

  if(defaults.method.toUpperCase() == 'POST'){
    oXhr.open(defaults.method ,defaults.url, defaults.async);
    oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    oXhr.send(defaults.postData);
  }
  else if(defaults.method.toUpperCase() == 'GET'){
    oXhr.open(defaults.method, defaults.url + '?' + defaults.postData, defaults.async);

    oXhr.send();
  }
  oXhr.onreadystatechange=function()
  {
    if (oXhr.readyState==4){
      if(oXhr.status==200){
        defaults.success.call(oXhr, oXhr.responseText);
      }
    }
    else{
      defaults.error(oXhr.status);
    }
  }
}
