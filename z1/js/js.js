window.onload=function(){
	function mytime() {
		var a = new Date();
		if (a.getHours() < 10) {
			Hours = "0" + a.getHours()
		}else{
			Hours=a.getHours()
		}
		if (a.getMinutes() < 10) {
			Minutes = "0" + a.getMinutes()
		}else{
			Minutes=a.getMinutes()
		}
		if (a.getSeconds() < 10) {
			Seconds = "0" + a.getSeconds()
		}else{
			Seconds=a.getSeconds()
		}
		document.getElementById('showTime').innerHTML = a.getFullYear() + '年' + (a.getMonth() + 1) + '月' + a.getDate() + '日' + '星期' + '日一二三四五六'.charAt(new Date().getDay()) + Hours + ':' + Minutes + ':' + Seconds;
	}
	setInterval(mytime, 1000);


	function ut2() {
		document.getElementById('ut').style.display = 'none';
	}	
}
