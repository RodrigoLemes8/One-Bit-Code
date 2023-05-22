function addPlayer() {
  const position = document.getElementById("position").value;
  const Name = document.getElementById("Name").value;
  const Number = document.getElementById("Number").value;

  const confirmation = confirm("Ecalar " + Name + " como " + position + "?");
  if (confirmation) {
    const teamList = document.getElementById("team-list");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + Number;
    playerItem.innerText = position + ": " + Name + " (" + Number + ")";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
