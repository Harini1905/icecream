function showSuccessMessage() {
    document.body.innerHTML = `
        <h1>Yay! You're the best!</h1>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnRtcDNsamluZWw2dmV1aHQwbTNhdThwbTN1ZGdibTR5NGxhaGdxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y1LEFKsbbP4hrLgV3/giphy.gif" 
             alt="Happy Dance" 
             style="width: 400px;">
    `;
}

function changeToYes(button) {
    button.innerText = 'Yes';
    button.setAttribute('onclick', 'showSuccessMessage()');
}
