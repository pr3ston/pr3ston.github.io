class Person {
    constructor({first_name, last_name}){
        this.first_name = first_name;
        this.last_name = last_name;
    }
}

let names = [];

function updateStorage(data){
    //et json = JSON.stringify(data);
    localStorage.setItem('database', JSON.stringify(data));
    readStorage();
}

function readStorage(){
    let json = localStorage.getItem('database');
    let result = JSON.parse(json) || [];
    result = result.map(first_last => new Person(first_last));
    return result;
}

function repeat_name(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const first = formData.get("first_name");
    const last = formData.get("last_name");
    const new_per = new Person({ first, last });
    let names = readStorage();
    names.push(new_per);
    updateStorage(names);
}