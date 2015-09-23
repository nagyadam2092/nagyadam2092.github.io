$(document).ready(function(){
	var blogId = "1762524982174490639";
	var APIKey = "AIzaSyBskSuKFLJGb6GTu6DP03xeqyr3ehXJ6kI";

	$.when(
		$.get("https://api.github.com/users/nagyadam2092/repos"),
		$.get("https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts?key=" + APIKey))
		.done(function(git, blogger){
			console.log(git);
			console.log(blogger);
		});

	/*$.get("https://api.github.com/users/nagyadam2092/repos", function(data){
		if(data){
			var $gitProjects = $("#gitProjects");
			data.forEach(function(repo){
				$gitProjects.append('<li><a href="' + repo.html_url + '" target="_blank">' + repo.html_url + '</a></li>');
			});
		}
	});

	$.get("https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts?key=" + APIKey, function(data){
		console.log(data);
	});*/
});