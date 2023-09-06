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
  const msg = input.parentNode.parentNode.querySelector('small')
  msg.innerHTML = message
  input.className += type ? ' success' : ' error'
  return type
}

function showError(input, message) {
  return showMessage(input, message, false)
}

function showSuccess(input) {
  return showMessage(input, '', true)
}

function hasValue(input, message) {
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
