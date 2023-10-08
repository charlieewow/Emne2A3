const addForm = document.getElementById("addTGform");

addForm.addEventListener('submit', function(event){
    //forhindrer standard innsendelse av data fra form
    event.preventDefault();

    //bruk formData API til å fange data fra form
    const addFormData = new FormData(this);

    //konverter form data til et object
    const addFormObject = Object.fromEntries(addFormData.entries());

    //nå kan det brukes i modellen ()?


})