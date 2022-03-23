var sleep = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
var loadbar = 0;
//ゴリ押し、改善予定はありません()
async function bar() {
	for (loadbar;loadbar <= 100;loadbar++) {
		$('#bar').css('width',loadbar + "vw")
		await sleep(1.5)
	}
}
async function title() {
	var name = "onudonLabo"
	for (var i = 1; i <= 10; i++) {
		$('#title').text(name.substr(0,i))
	 	await sleep(60)
	 	console.log(i)
	 } 
}
$(async function() {
	console.log("loaded")
	await bar()
	await title()
	await $('main').fadeIn(1000)
	var width = document.body.clientWidth;
	$('#bar').css('width',width)
	$('header').css('width',width)
})

window.addEventListener('DOMContentLoaded', function(){
  	window.addEventListener('resize', function(){
    	var width = document.body.clientWidth;
		$('#bar').css('width',width)
		$('header').css('width',width)
  	});
});