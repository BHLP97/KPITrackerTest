const form = document.querySelector('#newTeam')

const NAME_REQUIRED = 'Please enter the name of the team'
const LEAD_REQUIRED = 'Please designate a lead for the team'

form.addEventListener('submit', event => {
  event.preventDefault()

  let nameValid = hasValue(form.elements.name, NAME_REQUIRED)
  let leadValid = hasValue(form.elements.leadSelect, LEAD_REQUIRED)

  if (nameValid && leadValid) {
    let teamDB = getData('Teams')
    let newTeam = {
      id: findMaxID(teamDB) + 1,
      name: form.elements.name.value,
      lead: form.elements.leadSelect.value,
      members: $('#membersSelect').val(),
      kpis: ''
    }
    users = getData('Users');
    (newTeam.members).forEach(element => {
      member = users.find(item => item.id == parseInt(element))
      member.team = newTeam.id;
      users[member.id] = member;
      console.log(users);
    });
    teamDB.push(newTeam)
    saveData('Teams', teamDB)
    saveData('Users', users)
    swal("Good job!", "The team was successfully created!", "success")
    $("#newTeam")[0].reset()
  }
})