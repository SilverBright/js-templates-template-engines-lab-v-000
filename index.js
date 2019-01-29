function createPost() {
  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  const postTitle = document.getElementById("postTitle").value;
  const postAuthor = document.getElementById("postAuthor").value;
  const post = document.getElementById("postBody").value;
}


function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
}