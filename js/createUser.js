const form = document.querySelector('#newUser')

const NAME_REQUIRED = 'Please enter a name'
const EMAIL_REQUIRED = 'Please enter an email'
const EMAIL_INVALID = 'Please enter a correct email address format'
const PASSWORD_REQUIRED = 'Please enter a password'

form.addEventListener('submit', event => {
  event.preventDefault()

  let nameValid = hasValue(form.elements.name, NAME_REQUIRED)
  let emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID)
  let passwordValid = hasValue(form.elements.password, PASSWORD_REQUIRED)

  if (nameValid && emailValid && passwordValid) {
    let userDB = getData('Users')
    let newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value
    }
    userDB.push(newUser)
    saveData('Users', userDB)
  }
})