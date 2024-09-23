let table = document.getElementById("counthere");

function rendercontributionsTable(contributions) {
  let i = 1;
  contributions.forEach(({ login, html_url, contributions }) => {
    let row = table.insertRow(i);
    let slNoCell = row.insertCell(0);
    let userNameCell = row.insertCell(1);
    let urlUser = row.insertCell(2);
    let noOfcontributions = row.insertCell(3);
    slNoCell.innerText = i;
    userNameCell.innerText = login;
    urlUser.innerHTML = `<a href="${html_url}">${html_url}</a>`;
    noOfcontributions.innerText = contributions;
    i++;
  });
  document.getElementById("ct").innerHTML = i - 1 + " contributions";
}

fetch("https://api.github.com/repos/xx5905499/1_xx5_1/contributors")
  .then((response) => response.json())
  .then((contributions) => rendercontributionsTable(contributions))
  .catch((err) => console.log("Request Failed", err));
