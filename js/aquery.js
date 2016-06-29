/* 
* @Author: Quinn
* @Date:   2016-06-29 17:19:06
* @Last Modified by:   Quinn
* @Last Modified time: 2016-06-29 18:06:53
*/

(function(){
    window.$ = function(selector){
        if(/^#/.test(selector)){
            return document.getElementById(selector.substr(1,selector.length-1))
        }
        if(/^./.test(selector)){
            return document.getElementsByClassName(selector.substr(1,selector.length-1))
        }
    }
    $.ajax = function(opts){

        var url      = opts.url || '',
            type     = opts.type || 'get',
            dataType = opts.dataType || 'json',
            data     = opts.data || '',
            success  = opts.success || function(){},
            error    = opts.error || function(){}

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    success();
                }else{
                    error();
                }
            }else{
                error();
            }
        }
        xhr.open(type,url,true)
        xhr.send(data)
    }
    $.animate = function(opts){
        
    }
})(window)