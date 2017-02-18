var posts = [];
// posts[1] === data-id 1
var idCounter = 0;

var addPost = function (inputstring) {
	var post = {text: inputstring, id: idCounter, comments: []};
	posts.push(post);
	idCounter += 1;
}


var updatePost = function () {
	$(".posts").empty();

	for (var i = 0; i < posts.length; i++) {
		$(".posts").append("<div class='post' data-id=" + posts[i].id + ">" + 
			"<a href='#' class='remove'>remove  </a>" + posts[i].text +"<br>" + 
      "<button type='button'class='btn btn-primary newPage'>newPage...</button>"+
      "<div class='displayComment'></div>"+
			"<div class='comments-inputs'>Username<input class='username' type='text' placeholder='username'><br>"+
			"Comment:<input class='comment1' type='text'><br>"+
			"<button type='button' class='btn btn-primary submit'>Submit</button></div>"+ 
			"</div>");
		for ( var j = 0; j < posts[i].comments.length; j ++){
			$('.displayComment:last').append('<p>' + posts[i].comments[j].username+ " " + posts[i].comments[j].comment + '</p>')
		}
	}
}

//add post
$(".add-post").on("click", function() {
	var postText = $("#post-name").val();
	addPost(postText);
	updatePost();
});

//remove post
$(".posts").on("click",".remove", function () {
	$(this).closest('.post').remove();
	posts.splice(this,1);
})

$("body").on("click", ".comment", function () {
	$(this).hide();
})

//add comment
$(".posts").on("click", ".submit", function() {
    var username = $(this).closest(".comments-inputs").find(".username").val();
    var comment = $(this).closest(".comments-inputs").find(".comment1").val();
    var id = $(this).closest('.post').data().id;
    console.log('================================');
    console.log('below is this post before push');
    console.log(posts[id]);
   	posts[id].comments.push({username: username, comment: comment});
    console.log('================================');
    console.log('below is this post after push');
    console.log(posts[id]);
   	updatePost();
})