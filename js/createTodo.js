const form = document.querySelector('#newTodo')

const EMPLOYEE_REQUIRED = '</br>Please assign the ToDo to an employee'
const DESCRIPTION_REQUIRED = 'Please describe the ToDo'

form.addEventListener('submit', event => {
  event.preventDefault()
  
  let employeeValid = hasValue(form.elements.employeeSelect, EMPLOYEE_REQUIRED)
  let descriptionValid = hasValue(form.elements.description, DESCRIPTION_REQUIRED)

  if (employeeValid && descriptionValid) {
    let toDosDB = getData('ToDos')
    let toDosTemplatesDB = getData('ToDosTemplates')
    let momentDeadline = $('#deadline').datetimepicker('viewDate')
    let dateDeadline = momentDeadline.format('DD/MM/YYYY')
    
    let newTodo = {
      id: findMaxID(toDosDB) + 1,
      description: form.elements.description.value,
      employee: form.elements.employeeSelect.value,
      startdate: moment().format('DD/MM/YYYY'),
      deadline: dateDeadline,
      enddate: '',
      value: form.elements.value.value,
      status: 0
    }
    let newTodoTemplate = {
      id: findMaxID(toDosDB) + 1,
      description: form.elements.description.value,
      daysRequired: momentDeadline.diff(moment(), 'days'),
      value: ''
    }

    users = getData('Users');
    employee = users.find(item => item.id == newTodo.employee)
    employee.toDos += newTodo.id
    saveData('Users', users);
    toDosDB.push(newTodo)
    saveData('ToDos', toDosDB);
    if (toDosTemplatesDB.find(el => el.desc == form.elements.description.value)) {

    } else {
      toDosTemplatesDB.push(newTodoTemplate)
      saveData('ToDosTemplates', toDosTemplatesDB);
    }

    swal("Good job!", "The Todo was successfully created!", "success")
    $("#newTodo")[0].reset()
  }
})