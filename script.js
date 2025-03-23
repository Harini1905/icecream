function showSuccessMessage() {
    document.body.innerHTML = `
        <h1>Yay! You're the best!</h1>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnRtcDNsamluZWw2dmV1aHQwbTNhdThwbTN1ZGdibTR5NGxhaGdxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y1LEFKsbbP4hrLgV3/giphy.gif" 
             alt="Happy Dance" 
             style="width: 400px;">
    `;
}

function swapButtons() {
    let yesButton = document.querySelector('.yes');
    let noButton = document.querySelector('.no');
    
    // Swap button positions
    yesButton.classList.toggle('yes');
    yesButton.classList.toggle('no');
    noButton.classList.toggle('no');
    noButton.classList.toggle('yes');
    
    // Swap text content
    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;
}

document.addEventListener("DOMContentLoaded", function() {
    let buttonsContainer = document.querySelector(".buttons");
    
    buttonsContainer.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("no")) {
            swapButtons();
        }
    });
    
    document.querySelector(".yes").addEventListener("click", showSuccessMessage);
});
