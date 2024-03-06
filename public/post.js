const createPostHandler = (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value.trim()
    const contents = document.querySelector('#contents').value.trim()
    fetch('/api/posts/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, contents})
    }).then(response => {
        if (response.ok) {
            document.location.replace('/dashboard')
        }
    }).catch(err => {
        console.log(err)
    })
}

document.querySelector('#create-post').addEventListener('submit', createPostHandler)