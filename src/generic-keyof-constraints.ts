interface IPerson{
    name:string;
    age:number;
};

const person ={
    name:"Arif",
    age:22
}

function getProperty<T extends IPerson, U extends keyof T> (obj:T, key:U) {
    return obj[key];
}

const property = getProperty(person, "age");