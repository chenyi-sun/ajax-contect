//node 可设置为空,如果为空,就默认值document,
function getElementsByClassName(node, className){
  var node = node || document;
  if(node.getElementsByClassName){
    return node.getElementsByClassName(className);
  }else{
    var results = new Array();
    var elems = node.getElementsByTagName("*");

    for(var i = 0; i < elems.length; i++){
      if(elems[i].className.indexOf(className) != -1){
        results[results.length] = elems[i];
      }
    }
    return results;
  }
}
