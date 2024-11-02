
const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
function submitFeedback() {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedbackText').value;
    //const submitButton=document.getElementById('submitBtn');

    //submitButton.addEventListener('click', handleButtonClick());
    //function handleButtonClick() {
        alert('We have received your message and will be intouch shortly!');
     // }

      document.getElementById('userName').innerHTML = username;
      document.getElementById('userEmail').innerHTML = email;
      document.getElementById('userFeedback').innerHTML = feedback;
      document.getElementById('userInfo').style.display = 'block';

}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });