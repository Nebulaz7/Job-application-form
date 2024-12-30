const submitBtn = document.getElementById('submit');
const checkbox = document.getElementById("Checkbox");
const errText =  document.getElementById("err");

function disapear() {
  document.write('The end.');
}

submitBtn.addEventListener('click', () => {
  if (checkbox.checked) {
    const popup = document.createElement('div');
    popup.innerHTML = '<h2>Congratulations!!!</h2> <p> Your application is submitted successfully, you will be notifed if considered. <p>  <button onclick="disapear()" class="button">Continue</button>';
    popup.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: white; border: 1px solid #ccc; box-shadow: 0 2px 10px rgba(0,0,0,0.1); color: #000;';
    document.body.appendChild(popup);
  } else {
    errText.innerHTML = `<span style="color: red;">Please fill all fields</span>`
  }
});