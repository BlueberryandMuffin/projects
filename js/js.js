
function mytime() {
	var a = new Date();
	document.getElementById('showTime').innerHTML = a.getFullYear()+'年'+(a.getMonth()+1) +'月'+ a.getDate()+'日' + '星期' + '日一二三四五六'.charAt(new Date().getDay())+ a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
}
setInterval(mytime, 1000);

function ut2(){
	document.getElementById('ut').style.display = 'none';
}
