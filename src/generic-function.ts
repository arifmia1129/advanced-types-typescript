const createArr = <T> (param:T):Array<T> => {
    return [param];
}

const result = createArr<string>("Arif");

interface IPerson {
    id:number,
    name:{
        firstName:string,
        lastName:string
    },
    mobile:Array<string>
}

const person =  {
    id:1,
    name:{
        firstName:"Md",
        lastName:"Arif"
    },
    mobile:["01849676331", "01767812538"]
}

const result1 = createArr<IPerson>(person);

console.log(result1);

interface ICompany  {
    name:string;
    address:string;
    category:string;
    contact:string
}

const companyInfo ={
    name:"Pallabi Business Services Limited",
    address:"Mirpur-12, Pallabi, Dhaka-1216",
    category:"IT, Software and Online Business",
    contact:"info@pbsl.com"
}

const employeeInfo = <T, U>(name:T, companyInfo:U) : U => {
    return {employee:name, ...companyInfo};
}

const employee = employeeInfo<string, ICompany>("Arif", companyInfo);
console.log(employee);