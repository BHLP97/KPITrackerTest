const saveData = (objectName, object) => {
  localStorage.setItem(objectName, JSON.stringify(object))
}

const getData = objectName => {
  const value = localStorage.getItem(objectName)

  if (value) {
    return JSON.parse(value)
  }

  return []
}

const findMaxID = arr =>{
  if (arr.length === 0) return 1
  return Math.max(...arr.map(t => t.id))
}

const showMessage = (input, message, type) => {
	console.log(input.parentNode)
  const msg = input.parentNode.querySelector('small')
  msg.innerHTML = message
  input.className = type ? 'success' : 'error'
  return type
}

function showError(input, message) {
	console.log('showError')
  return showMessage(input, message, false)
}

function showSuccess(input) {
	console.log('showSuccess')
  return showMessage(input, '', true)
}

function hasValue(input, message) {
  console.log('checkingValue')
  if (input.value.trim() === '') {
    return showError(input, message)
  }

  return showSuccess(input)
}

const validateEmail = (input, requiredMsg, invalidMsg) => {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false
  }

  // validate email format
  const emailRegex =
		/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z\-]+\.)+[A-Za-z]{2,}))$/

  const email = input.value.trim()
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg)
  }

  return true
}

const form = document.querySelector('#newUser')

const NAME_REQUIRED = 'Please enter a name'
const EMAIL_REQUIRED = 'Please enter an email'
const EMAIL_INVALID = 'Please enter a correct email address format'
const PASSWORD_REQUIRED = 'Please enter a password'

form.addEventListener('submit', event => {
  event.preventDefault()

  let nameValid = hasValue(form.elements['name'], NAME_REQUIRED)
  let emailValid = validateEmail(form.elements['email'], EMAIL_REQUIRED, EMAIL_INVALID)

  if (nameValid && emailValid) {
    alert('Demo only. No user was posted.')
  }
})
