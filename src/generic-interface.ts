interface IGeneric<T, U=null, V=null>{
    name:string,
    married:T,
    wife?:U,
    husband?:V
};

interface IPerson{
    name:string,
    age:number
}

const person:IGeneric<boolean, object, object> = {
    name:"Lovely couple",
    married:true,
    wife:{
        name:"Binu",
        age:21
    },
    husband:{
        name:"Arif",
        age:22
    }
}

const obj1:IGeneric<string,string>={
    name:"Arif",
    married:"Biye koreche.",
    wife:"Binu"
};

const obj2:IGeneric<boolean>={
    name:"Shahin",
    married:false
}