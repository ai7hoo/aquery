/* 
* @Author: Quinn
* @Date:   2016-06-29 17:19:16
* @Last Modified by:   Quinn
* @Last Modified time: 2016-06-29 17:56:25
*/

$('#box').style.color = 'red'
$('.des')[0].style.color = 'yellow'

$.ajax({
    url:'http://localhost/json.php',
    type:'get',
    dataType:'json',
    data:{name:'quinn'},
    success:function(){},
    error:function(){
        console.log('er')
    }
})