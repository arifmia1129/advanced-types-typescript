const makePromise = ():Promise<string>=> {
    return new Promise<string>((resolved, reject)=>{
        const data:string = "Data fetched from network";

        if(data) {
            resolved(data);
        }else{
            reject("Failed to fetched!")
        }
    })
}


const makePromiseBoolean = ():Promise<boolean> => {
    return new Promise<boolean>((resolved, reject)=> {
        const data:boolean = true;
        if(data) {
            resolved(data);
        }else{
            reject("Nothing");
        }
    })
}

interface IData {
    data:string;
}

const makePromiseObjectData = ():Promise<IData> => {
    return new Promise<IData>((resolved, reject)=> {
        const data:IData = {data:"Successfully fetched from network"}
        if(data) {
            resolved(data);
        }else{
            reject({data:"Couldn't fetched data"})
        }
    })
}


const getPromiseStringData = async ():Promise<string>=> {
    const data = await makePromise();
    return data;
}

const getPromiseBooleanData = async ():Promise<boolean>=> {
    const data = await makePromiseBoolean();
    return data;
}


const getPromiseObjectData = async ():Promise<IData> => {
    const data = await makePromiseObjectData();
    return data;
}

type ToDoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getToDo = async () :Promise<ToDoType> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return data;
}

const todoResult = async():Promise<void> => {
    const result = await getToDo();
    console.log(result);
};
todoResult();