const form = document.travelForm;
const firstName = form.firstName;
const lastName = form.lastName;
const age = form.age;
const gender = form.gender;
const destination = form.destination;
const diet = document.querySelectorAll("input[name=diet]:checked.value");
const button = form.submit;

form.addEventListener("submit", function() {
    event.preventDefault;
    const diet = document.querySelectorAll("input[name=diet]:checked");
    const dietChecked = []
    for (let i = 0; i < diet.length; i++) {
        dietChecked.push(diet[i].value);
    };

    alert(`First Name: ${firstName.value}\nLast Name: ${lastName.value}\nAge: ${age.value}\nGender: ${gender.value}\nLocation: ${destination.value}\nDietary Restrictions: ${dietChecked.join(", ")}`);
});