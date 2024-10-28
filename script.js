function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    if (name && age && gender && course && email) {
        const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
        `;

        document.getElementById("studentForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
