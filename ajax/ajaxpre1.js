(function(){
  var common = {
    ajax : function(){
      var _ajax = function (){
        return ('XMLHttpRequest' in window) ? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      }();
      var AJAX = function(opts){
        var req = _ajax;
        var itmes = {
          url: opts.url || '',
          type: opts.type || 'responseText',
          method: opts.method || 'GET',
          async: opts.async || true,
          data: opts.data || {},
          dataType: opts.beforeSend || function(){},
          complete: opts.complete || function(){},
          success: opts.success || function(){},
          error: opts.error ||function(){},
          abort: opts.abort
        }

          req.open(items.method,items.url,items.async);
          req.onreadystatechange = function () {
            console.log('ssss');
          }
      }
      return function(opts) {
        return new AJAX(opts)
        console.log(opts);
      }
    }()
  }
  //var common;
  // preAjax = window.common;
  window.common = common;

})();
common.ajax('xx');
// console.log();
// console.log(common.ajax("ssss")());
