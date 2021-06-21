import { data } from "./main.js";

const main = document.getElementById("main");

// All Assistants
const assistants = data.filter((assistant) => assistant.assistant === true);

// All Groups
let groups = [];
let groupsMemberNames = [];

// Loop to filter the same group members
for (let i = 0; i < assistants.length; i++) {
  const formatedData = data.filter(
    (member) => member.group === assistants[i].group
  );
  groups.push(formatedData);
}

// Team Names
for (let i = 0; i < groups.length; i++) {
  const groupNames = groups[i].map((member) => member.name);
  groupsMemberNames.push(groupNames);
}

// Team color
for (let i = 0; i < groups.length; i++) {
  const color = groups[i].map((member) => member.group);
  const groupColor = new Set(color);
  groupsMemberNames[i].push(...groupColor);
}

// Create leader DOM
function createLeader(member) {
  // Team Color form the Array
  const color = member[member.length - 1];

  const newTeam = document.createElement("div");
  newTeam.classList.add(`team`);
  newTeam.classList.add(`${color}`);
  newTeam.innerHTML = `
    <div class="team__leader">
      <h1 class="team__assis">${member[0]}</h1>
      </div> 
      <h2 class='team__intro'>Click to See </ br>${color} group </h2>
    
      `;

  main.appendChild(newTeam);

  // adding border color
  newTeam.style.border = `4px solid ${color}`;

  //adding INTRO Color
  console.log();
  newTeam.lastElementChild.style.color = color;

  // create members DOM
  member.slice(1, -1).forEach((member) => {
    const groupMembers = document.createElement("li");
    groupMembers.classList.add("team__member");
    groupMembers.innerHTML = ` 
          ${member} 
        `;
    return newTeam.appendChild(groupMembers);
  });

  // Event Listener CLICK on BOX => to show the team detailss
  newTeam.addEventListener("click", (e) => {
    const teamClassName = e.target;
    console.log(teamClassName.parentElement);
    const teamColor = teamClassName.className.split(" ")[1];
    showTeam(teamClassName, teamColor);
    hideIntro(newTeam);
  });
  // Event Listener CLICK on INTRO=> to show the team detailss
  newTeam.children[1].addEventListener("click", (e) => {
    const teamClassName = e.target.parentElement;
    console.log(teamClassName);
    const teamColor = teamClassName.className.split(" ")[1];
    showTeam(teamClassName, teamColor);
    hideIntro(newTeam);
  });
}

//Init app
function init() {
  groupsMemberNames.forEach(createLeader);
}
init();

// Show Team Details after Click
function showTeam(team, teamColor) {
  const GroupClasses = team.children;
  for (let i = 0; i < GroupClasses.length; i++) {
    GroupClasses[i].classList.add("fadeIn");
  }
  team.style.backgroundColor = teamColor;
}

// Hide the Team intro after click
function hideIntro(team) {
  team.children[1].style.visibility = "hidden";
}
