/* Primer practica con fetch: 

Mostrar en forma de tabla todos los usuarios de la siguiente API: Users API. La tabla tendrá que contener un filtro que permita filtrar por rol a los usuarios.

Cada row de la tabla deberá contener lo siguiente:

Id
Avatar
Nombre
Mail */

function getApi (){
    let loading = document.getElementById('loading');

    fetch('https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users')
    .then((response) => response.json())
    .then((data) => updateTable(data))
    .catch((error) => console.error('Error loading users', error))
    .finally(() => loading.style.display = 'none')
}

window.onload = getApi();

function updateTable (users){
    let usersTable = document.querySelector(".users-table");
    let hidden = document.getElementById("hidden");
    usersTable.innerHTML = "";

    users.forEach(user => {
        let row = document.createElement('tr');

        let idColumn = document.createElement('td');
        idColumn.textContent = user.id;
        row.appendChild(idColumn);

        let nameColumn = document.createElement('td');
        nameColumn.textContent = user.name;
        row.appendChild(nameColumn);

        let mailColumn = document.createElement('td');
        mailColumn.textContent = user.email;
        row.appendChild(mailColumn);

        usersTable.appendChild(row);
    });

    hidden.style.display = 'block'
}