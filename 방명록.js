
function addComment() {
    const commentInput = document.getElementById('guestbookInput');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentSection = document.getElementById('guestbookComments');
        const newComment = document.createElement('div');
        newComment.classList.add('guestbook-comment');
        newComment.textContent = commentText;

        commentSection.appendChild(newComment);
        commentInput.value = '';
    } else {
        alert('내용을 입력해주세요!');
    }
}
