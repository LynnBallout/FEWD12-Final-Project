$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	$('#fullpage').fullpage({
		sectionsColor: ['#242A30', '#fff', '#95A6AD', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		scrollingSpeed: 1000
	});
	
});