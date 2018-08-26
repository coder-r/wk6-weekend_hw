



document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-animal-form');


  form.addEventListener('submit', (event) => {
  event.preventDefault();

    // Inputs from form
    const commonName = event.target.commonname.value;
    const scientificName = event.target.scientificname.value;
    const category = event.target.category.value;
    const threat = event.target.threat.value

    // new li created and updated with form inputs
    const newAnimal = document.createElement("li");
    newAnimal.textContent = `Common Name: ${commonName},   Scientific Name: ${scientificName},    Category: ${category}, Main Threat: ${threat}`;

    // append new item to list
    const animalList = document.querySelector('#endangered-list');
    animalList.appendChild(newAnimal);

    //reset form
    form.reset();
  });

  const buttonDelete = document.querySelector('#delete-button');
  buttonDelete.addEventListener('click', () => {
    const animalList = document.querySelector('#endangered-list')
    animalList.textContent = '';
    form.reset();
  });


});
