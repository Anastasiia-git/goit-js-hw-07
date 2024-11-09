const form = document.querySelector('.form-login');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  if (!elements.email.value || !elements.password.value) {
    alert(JSON.stringify(`All form fields must be filled in`));
  }

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  console.log(info);
  event.target.reset();
}
