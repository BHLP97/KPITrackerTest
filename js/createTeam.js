const form = document.querySelector('#newTeam')

const NAME_REQUIRED = 'Please enter the name of the team'
const PM_REQUIRED = 'Please designate a project manager for the team'

form.addEventListener('submit', event => {
  event.preventDefault()

  let nameValid = hasValue(form.elements.name, NAME_REQUIRED)
  let pmValid = hasValue(form.elements.pm, PM_REQUIRED)

  if (nameValid && pmValid) {
    let teamDB = getData('Teams')
    let newTeam = {
      name: form.elements.name.value,
      pm: form.elements.pm.value
    }
    teamDB.push(newTeam)
    saveData('Teams', teamDB)
    swal("Good job!", "The team was successfully created!", "success");
  }
})