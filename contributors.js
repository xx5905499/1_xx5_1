let table = document.getElementById("allScores");

function renderdescriptionTable(description) {
  let i = 1;
  description.forEach(({ login, html_url, description }) => {
    let row = table.insertRow(i);
    let slNoCell = row.insertCell(0);
    let userNameCell = row.insertCell(1);
    let urlUser = row.insertCell(2);
    let noOfdescription = row.insertCell(3);
    slNoCell.innerText = i;
    userNameCell.innerText = login;
    urlUser.innerHTML = `<a href="${html_url}">${html_url}</a>`;
    noOfdescription.innerText = description;
    i++;
  });
  document.getElementById("DI").innerHTML = i - 1 + " description";
}

fetch("https://api.kirka.io/api/clans/Reverie")
  .then((response) => response.json())
  .then((description) => renderdescriptionTable(description))
  .catch((err) => console.log("Request Failed", err));
