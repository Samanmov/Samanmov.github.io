
$(document).ready(function() {
		$("button").click(function(e) {
			$("#winter").html("<h1> loading...<h1>");
			/* När man skriver ett ord i textruta sen klickar man på sök knappen Då kommer en Ajax*/
			e.preventDefault();
			var t = $("#textbox").val();
			/* Tar bort winter bilden*/
			
			/*Tom results*/
			$("#results").empty();
			$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e47db0f0890530c12d8aefd0248a5f16&text="+t+"&format=json&nojsoncallback=1", 
			 /* Det skickas en Get request till api flickr photo +t+ för att hitta bilder för det här ordet som man har sökt i textruta*/
					  
				function(data) {
				$("#winter").empty();
				$.each(data.photos.photo, function(i,obj){
                    $("#results").append("<img src=https://farm" + obj.farm + ".staticflickr.com/" + obj.server + "/" + obj.id +"_" + obj.secret +".jpg" + ">");				
 /*När svaret kommer tillbaka från servern då lägger till man en append för url img tagg av flickr och ersättar till #results*/
				});
            });
		});
	$("#gallery").click(function(e) {
		$("#winter").html("<h1> loading...<h1>");
	/* Här kommer en klick funktion till gallery som man vill göra en Ajax */
		$("#results").empty();
			$.getJSON("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=e47db0f0890530c12d8aefd0248a5f16&gallery_id=66911286-72157659307975664&format=json&nojsoncallback=1", 
					  /* Det skickas en get request till api flickr gallery*/
				function(data) {
				$("#winter").empty();
		          $.each(data.photos.photo, function(i,obj){
                    $("#results").append("<img src=https://farm" + obj.farm + ".staticflickr.com/" + obj.server + "/" + obj.id +"_" + obj.secret +".jpg" + ">");
			/*När svaret kommer tillbaka från servern då lägger till man en append för url img tagg av flickr och ersättar till #results*/
	             }); 
            }); 
	});
	$("img").click(function(e){
	/* Här kommer en klick funktion till img tagg */
		$("#winter").html("<h1> loading...<h1>");
		/* tar bort winter bilden*/
		$("#results").empty();
		   $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=e47db0f0890530c12d8aefd0248a5f16&photo_id=22427723652&format=json&nojsoncallback=1",
					  /* Det skickas en get request till api flickr getInfo */
				function(data) {
			   $("#winter").empty();
			   /* Sen lägger till en article tagg i början av vår response */
		          var text= "<article>";
			      text +="<h1>" + data.photo.title._content + "</h1>";
			   /* Det plockas några obj av JSON fil sen lägg till dem med några taggar*/
				  text +="<em> Username: " + data.photo.owner.username + "</em>";	
			      text +="<p> Location: " + data.photo.owner.location +"</p>";
			      text +="<mark>" + data.photo.description._content +"</mark>";
			      text +="<p>Posted: " + data.photo.dates.posted + "</p>";
			      text +="<em>Taken: " + data.photo.dates.taken + "<em>"; 
				  text +="</article>";
				  $("#results2").append(text);
			   /* Sen append de till #results, det är en response som vi har fått illbaka servern.*/
		   });
	});
});