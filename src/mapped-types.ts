type volumn = {
    heigth:number;
    width:number;
    depth:number
}

type Area<T> = {
    [index in keyof T]:T[index]
}

const area:Area<volumn> = {
    heigth:10,
    width:10,
    depth:10
} 