// type user = {
//     name:string,
//     age:number
// };

// interface IUser{
//     name:string,
//     age:number
// };

// const userWithTypeAlias:user = {
//     name:"Type alias",
//     age:21
// }

// const userWithInterface:IUser={
//     name:"Interface",
//     age:22
// }

// type extendedUser =user & {
//     role:string
// };

// interface IExtendedUser extends IUser{
//     role:string
// }

// const extendedUserWithTypeElias:extendedUser = {
//     name:"Extended user",
//     age: 25,
//     role:"Extended"
// };

// const extendedUserWithInterface:IExtendedUser ={
//     name:"Extender Interface User",
//     age:26,
//     role:"Interface"
// }


// type addNumTypes =(num1:number, num2:number)=>number;

// interface IAddNumber{
//     (num1:number, num2:number):number
// }

// const addNum:IAddNumber = (num1, num2)=> num1+num2;

// type rollNumbersType = number[];

// interface IRollNumbers{
//     [index:number]:number
// }

// const rollNumbers:IRollNumbers = [1, 2, 3];