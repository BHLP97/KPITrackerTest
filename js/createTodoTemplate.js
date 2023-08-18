const form = document.querySelector('#newTodoTemplate')

const TITLE_REQUIRED = 'Please enter a title'

form.addEventListener('submit', event => {
  event.preventDefault()

  let titleValid = hasValue(form.elements.title, NAME_REQUIRED)

  if (nameValid) {
    let TodoTemplateDB = getData('TodoTemplates')
    let newTodoTemplate = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value
    }
    TodoTemplateDB.push(newTodoTemplate)
    saveData('TodoTemplates', TodoTemplateDB)
  }
})