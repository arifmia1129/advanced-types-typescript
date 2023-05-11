interface IEmployee{
    name:string,
    age:number,
    address:string
}

const employeeArr = <T extends IEmployee> (employee:T):Array<T> =>{
    return [employee];
}

const employee:IEmployee = {
    name:"Arif",
    age:22,
    address:"Gobindaganj, Gaibandha"
}

const result = employeeArr<IEmployee>(employee);