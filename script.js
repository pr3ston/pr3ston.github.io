class Person {
    constructor({first_name, last_name}){
        this.first = first_name;
        this.last = last_name;
    }
}

let names = [];

function updateStorage(data){
    let json = JSON.stringify(data);
    localStorage.setItem('database', json);
}

function readStorage(){
    let json = localStorage.getItem('database');
    json_parse = JSON.parse(json) || [];
    let result = json_parse.map(first_last => new Person(first_last));
    return result;
}

function repeat_name(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const first = formData.get('first_name');
    const last = formData.get('last_name');
    const new_per = new Person({ first, last });
    let names = readStorage();
    names.push(new_per);
    updateStorage(names);
}