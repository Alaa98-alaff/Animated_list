import { data } from "./main";

const main = document.getElementById("main");

// All Assistants
const assistants = data.filter((assistant) => assistant.assistant === true);

// All Groups
let groups = [];

// Just Take the Names
for (let i = 0; i < groups.length; i++) {}

// Loop to filter the same group members
for (let i = 0; i < assistants.length; i++) {
  const formatedData = data.filter(
    (member) => member.group === assistants[i].group
  );
  groups.push(formatedData);
}
console.log(groups);

// Create Teams DOM

function createTeam(member) {
  const newTeam = document.createElement("div");
  newTeam.classList.add(`team`);
  // newTeam.classList.add(``);
  newTeam.innerHTML = `
    <div class="team__leader">
      <h1 class="team__assis">${member.name}</h1>
    </div>
    <ul class="team__members">
      <li class="team__member">${member.name}</li>
      <li class="team__member">mohamed</li>
      <li class="team__member">Ali</li>
      <li class="team__member">yas</li>
    </ul>
      `;

  main.appendChild(newTeam);

  // Event Listener CLICK => to show the team detailss
  newTeam.addEventListener("click", (e) => {
    const teamClassName = e.target;
    const teamColor = teamClassName.className.split(" ")[1];
    showTeam(teamClassName, teamColor);
  });
}

//Init app
function init() {
  main.innerHTML = "";
  // for (let i = 0; i < groups.length; i++) {
  groups[0].forEach(createTeam);
  // }
}
init();

// Show Team Details after Click
function showTeam(team, teamColor) {
  const liderClassName = team.firstElementChild;
  const membersClassName = team.lastElementChild;
  liderClassName.classList.add("fadeIn");
  membersClassName.classList.add("fadeIn");
  team.style.backgroundColor = teamColor;
}
