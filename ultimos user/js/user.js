function search() {
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (users) {
                displayUsersAsATable(users);
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });
}

function displayUsersAsATable(users) {
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";
    var table = document.createElement("table");
    users.forEach(function (currentUser) {
        var row = table.insertRow();
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });
    usersDiv.appendChild(table);
}