$(document).ready(function(){
	var blogId = "1762524982174490639";
	var APIKey = "AIzaSyBskSuKFLJGb6GTu6DP03xeqyr3ehXJ6kI";
	var posts = [];

	$.when(
		$.get("https://api.github.com/users/nagyadam2092/repos"),
		$.get("https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts?key=" + APIKey))
		.done(function(git, blogger){
			var gitPosts = git[0];
			var bloggerPosts = blogger[0].items;
			var $posts = $("#posts");
			var postLength = 50;
			gitPosts.forEach(function(GPost){
				var post = {};
				post.title = GPost.name;
				post.description = GPost.description;
				post.link = GPost.url;
				post.brand = "http://cdn.flaticon.com/png/256/25231.png";
				posts.push(post);
			});
			bloggerPosts.forEach(function(BPost){
				var post = {};
				post.title = BPost.title;
				post.description = BPost.content;
				post.link = BPost.url;
				post.brand = "http://wiki.ivsa.org/images/d/d5/Blogger_logo.png";
				posts.push(post);
			});
			console.log(posts);
			shuffle(posts);
			$posts.append('<h2 class="col-md-12">Some of my articles and repos</h2>');
			posts.forEach(function(post){
				$posts.append('<div class="col-md-4"><img src=" ' 
					+ post.brand + '">'
					+ '<a href="' 
					+ post.link 
					+ '" target="_blank"><h3>' 
					+ post.title + '</h3>'
					//+ '<p>' 
					//+ post && post.description < postLength ? post.description : post.description.substr(0,postLength) + '</p>'
					+ '</a></div>');
			});

			function shuffle(array) {
				var currentIndex = array.length, temporaryValue, randomIndex ;
				while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
				}
				return array;
			}	
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