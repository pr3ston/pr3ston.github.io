class Person {
    constructor(first_name, last_name){
        this.first = first_name;
        this.last = last_name;
    }
}

let names = [];

function updateStorage(data){
    //et json = JSON.stringify(data);
    localStorage.setItem('database', JSON.stringify(data));
    //readStorage();
}

function readStorage(){
    let json = localStorage.getItem('database');
    let result = JSON.parse(json) || [];
    result = result.map(first_last => new Person(first_last));
    return result;
}

// function repeat_name(event){
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const first = formData.get('first_name');
//     const last = formData.get('last_name');
//     const new_per = new Person({ first, last });
//     names = readStorage();
//     names.push(new_per);
//     updateStorage(names);
// }
function repeat_name(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const first = formData.get('brother');
    const last = formData.get('hello');
    if (first.trim() !== '' && last.trim() !== '') {
        const new_per = new Person( first, last );
        names = readStorage(); // Retrieve the names from storage
        console.log(names);
        names.push(new_per); // Add the new Person to the array
        updateStorage(names); // Store the updated array
    } else {
        console.log('First name and last name cannot be empty.');
    }
}
