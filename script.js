class Insured {
    constructor(firstName, lastName, dateOfBirth, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (Narodenie: ${this.dateOfBirth}, Tel: ${this.phoneNumber})`;
    }
}

const insuranceForm = document.getElementById('insuranceForm');
const insuredList = document.getElementById('insuredList');
const insuredData = [];

insuranceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const insured = new Insured(firstName, lastName, dateOfBirth, phoneNumber);
    insuredData.push(insured);

    displayInsuredList();
    insuranceForm.reset();
});

function displayInsuredList() {
    insuredList.innerHTML = '';
    for (const insured of insuredData) {
        const listItem = document.createElement('li');
        listItem.textContent = insured.toString();
        insuredList.appendChild(listItem);
    }
}
