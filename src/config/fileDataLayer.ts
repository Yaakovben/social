import fs from 'fs/promises'

// ייבוא
export const getFileData =async <T> (resours:string):Promise<T[] | void> =>{
    try {
        const strData = await fs.readFile(`${__dirname}/../../data/${resours}.json`,'utf-8')
        const parsedata:T[] = JSON.parse(strData)
        return parsedata
    } catch (err) {
        console.log(err);       
    }
}

// שמירה 
export const saveFileData =async<T> (resours:string, data:T[]):Promise<boolean> =>{
    try {
        const stringifiData:string = JSON.stringify(data)
        await fs.writeFile(`${__dirname}/../../data/${resours}.json`,stringifiData,{
            encoding:'utf-8'
        })
        return true
    } catch (err) {
        console.log(err);
        return false
        
    }
}