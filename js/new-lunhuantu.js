 //图片类名
 var img2 = document.getElementsByClassName("i-r-img2")[0];
 var img3 = document.getElementsByClassName("i-r-img3")[0];
 //左侧文字类名
 var item2 = document.getElementsByClassName("i-l-item2")[0];
 var item3 = document.getElementsByClassName("i-l-item3")[0];



 // 图2 鼠标移入
 item2.onmouseover = function () {
     img2.style.display = "block"
 }

 // 图2 鼠标移出
 item2.onmouseout = function () {
     img2.style.display = "none"
 }

 // 图2 鼠标移入
 item3.onmouseover = function () {
     img3.style.display = "block"
 }

 // 图2 鼠标移出
 item3.onmouseout = function () {
     img3.style.display = "none"
 }