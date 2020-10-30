function track(datatrack){
	
	$(document).ready(function(){
		
		var jsurl = 'https:'+$("script[src*='assets.adobedtm.com']").attr('src');
		//var jsurl = 'https://assets.adobedtm.com/7dc0646f0ec6b8a4fc7236459e015c177d3624ef/satelliteLib-6daa54f7b6049512f1b33b7a8a144ba3de12422f.js';
		//console.log(jsurl);
		//GET FIRST CODE
		$.getScript(jsurl, function( data, textStatus, jqXHR ){
			//console.log( textStatus ); // success
			//console.log( jqXHR.status ); // 200			
			if(textStatus == 'success'){						
				var jspath = jsurl.split("/");
				var finaljspath = jspath.slice(0, jspath.length - 2).join("/") + "/";			
				var scodeobj = _satellite.tools;						
				var scodeobjKey = Object.keys(scodeobj)[1];						
				var scodejsurl = finaljspath+scodeobj[scodeobjKey]['settings']['sCodeURL'];			
				//console.log('scode url: ' + scodejsurl);
				//console.log(datatrack);
				$.getScript(scodejsurl, function( data, textStatus, jqXHR ){
					//console.log( textStatus ); // success
					//console.log( jqXHR.status ); // 200			
					if(textStatus == 'success'){
						s.pageName = datatrack;
						var s_code=s.t();if(s_code)document.write(s_code);						
						console.log('track: ' + datatrack);
					}else{
						//console.log('track error: 2');								
					}
				});	
			}else{
				//console.log('track error: 1');				
			}
		});
	});
}