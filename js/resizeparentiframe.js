$(document).ready(function(){	

	var ch = $('#pcontent').outerHeight();
	$(parent.document).find('.MiniSiteModule').find('iframe').attr("scrolling", "no");	
	$(parent.document).find('.MiniSiteModule').find('iframe').attr("frameBorder", "0");	
	$(parent.document).find('.MiniSiteModule').find('iframe').outerHeight(ch+30);
	$(parent.document).find('.MiniSiteModule').find('iframe').css({
		'min-height':'100px'
	});		
	$(window).resize(function() {
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function(){
			var ch = $('#pcontent').outerHeight();
			$(parent.document).find('.MiniSiteModule').find('iframe').outerHeight(ch+30);
			
			//console.log('Resized finished resize 1');
		}, 20);
	});	
	$(parent.document).scroll(function() {
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function(){
			var ch = $('#pcontent').outerHeight();
			$(parent.document).find('.MiniSiteModule').find('iframe').outerHeight(ch+30);
			
			//console.log('Resized finished scroll.');
		}, 20);
	});
	
	//resizeiframe(ch);
});
$(parent.document).ready(function(){	
	var ch = $('#pcontent').outerHeight();
	$(parent.document).find('.MiniSiteModule').find('iframe').attr("scrolling", "no");	
	$(parent.document).find('.MiniSiteModule').find('iframe').attr("frameBorder", "0");	
	$(parent.document).find('.MiniSiteModule').find('iframe').outerHeight(ch+30);
	$(parent.document).find('.MiniSiteModule').find('iframe').css({
		'min-height':'100px'
	});
	//console.log('Resized finished parent ready.');
});
function resizeiframe(ch){
	var ch = $('#pcontent').outerHeight();	
	$(parent.document).find('.MiniSiteModule').find('iframe').outerHeight(ch+30);

	console.log('res');
}