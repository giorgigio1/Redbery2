let teamSection = document.querySelector('.teamSection');
let positions = document.querySelector('.positions');

fetchTeamSection()
fetchPositions()

function fetchTeamSection() {
    window.fetch('https://pcfy.redberryinternship.ge/api/teams').then(res => res.json()).then(result => {
        
            result.data.forEach(team => {
                    let option = document.createElement('option')
                    option.setAttribute('placeholder', team.name)
                    option.setAttribute('value', team.team_id)
                    option.innerText = team.name
                    teamSection.appendChild(option)
            })
    })
}

function fetchPositions() {
    window.fetch('https://pcfy.redberryinternship.ge/api/positions').then(res => res.json()).then(result => {
        
        result.data.forEach(position => {
                let option = document.createElement('option')
                option.setAttribute('placeholder', position.name)
                option.setAttribute('value', position.team_id)
                option.innerText = position.name
                positions.appendChild(option)
        })
})
}