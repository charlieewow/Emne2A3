/*const addForm = document.querySelector("#addTform");

addForm.addEventListener('click', function(event){
    //forhindrer standard innsendelse av data fra form
    event.preventDefault();

    //bruk formData API til å fange data fra form
    const addFormData = new FormData(this);

    //konverter form data til et object
    const addFormObject = Object.fromEntries(addFormData.entries());

    //nå kan det brukes i modellen ()?

console.log("??");
})*/

function process(object, form){
    console.log(form.id);
    console.log(object);
    let workObject = object;
    if(form.id == "addTform"){
        console.log("aktivitet");
        console.log(workObject);
    }
    if(form.id == "addGform"){
        model.data.goalList.
        console.log("mål");
        console.log(workObject.NKActivity);

    }
    return workObject;
}

/*
{
    taskId: "D" + 1,
    name: undefined,
    theme: undefined,
    taskText: undefined,
    frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
},*/