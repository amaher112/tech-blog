const createCommentHandler = (e) => {
  e.preventDefault();
  const body = document.querySelector("#comment-body").value;


  fetch("/api/comments/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  })
    .then((response) => {
      if (response.ok) {
        document.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

document
  .querySelector("#create-comment")
  .addEventListener("submit", createCommentHandler);
