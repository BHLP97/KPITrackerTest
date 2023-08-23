const form = document.querySelector('#newTodoTemplate')

const TITLE_REQUIRED = 'Please enter a title'

form.addEventListener('submit', event => {
  event.preventDefault()

  let titleValid = hasValue(form.elements.title, TITLE_REQUIRED)

  if (titleValid) {
    let TodoTemplateDB = getData('TodoTemplates')
    let newTodoTemplate = {
      title: form.elements.title.value
    }
    TodoTemplateDB.push(newTodoTemplate)
    saveData('TodoTemplates', TodoTemplateDB)
    swal("Good job!", "The template was successfully created!", "success");
  }
})