let course:any;

course = "Next level web development";

(course as string).length;


function kgToGram (param:number|string):number|string|undefined{
    if(typeof(param) === "string") {
        return `Converted value is: ${parseFloat(param)*1000}`
    }
    if(typeof(param)==="number"){
        return param * 1000;
    }
}

const resultToBeNm = kgToGram(1000) as number;
const resultToBeString =<string> kgToGram("1000")