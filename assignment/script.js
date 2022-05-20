const switchElement = document.querySelector('.switch')
const name = document.getElementById('name')
const password = document.getElementById('password')
const password_2 = document.getElementById('password-2')
const form = document.getElementById('form')
const email = document.getElementById('email')
const errorElement = document.getElementById('error')
switchElement.addEventListener('click', () =>{
  document.body.classList.toggle('dark')
})


form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if(password_2.value !== password.value){
    messages.push('Password does not match.')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
