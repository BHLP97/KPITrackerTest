const form = document.querySelector('#newTeam')

const NAME_REQUIRED = 'Please enter the name of the team'
const LEAD_REQUIRED = '</br>Please designate a lead for the team'
const MEMBER_REQUIRED = '</br>Please enlist at least one employee to the team'

form.addEventListener('submit', event => {
  event.preventDefault()
  let nameValid = hasValue(form.elements.name, NAME_REQUIRED)
  let leadValid = hasValue(form.elements.leadSelect, LEAD_REQUIRED)
  let hasMembers = hasValue(form.elements.membersSelect, MEMBER_REQUIRED)

  if (nameValid && leadValid && hasMembers) {
    let teamDB = getData('Teams');
    let newTeam = {
      id: findMaxID(teamDB) + 1,
      name: form.elements.name.value,
      lead: form.elements.leadSelect.value,
      members: $('#membersSelect').val(),
      kpis: ''
    }
    users = getData('Users');
    (newTeam.members).forEach(element => {
      let member = users.find(item => item.id == parseInt(element))
      member.team = newTeam.id
    });
    let lead = users.find(item => item.id == parseInt(newTeam.lead))
    lead.team = newTeam.id

    teamDB.push(newTeam)
    saveData('Teams', teamDB)
    saveData('Users', users)
    swal("Good job!", "The team was successfully created!", "success")
    $("#newTeam")[0].reset()
  }
})