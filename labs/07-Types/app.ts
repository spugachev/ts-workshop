import * as json from './data.json';

interface Person { 
    type: 'person',
    firstName: string;
    lastName: string;
    age?: number;
    isActive?: boolean;
    address?: Address
}

interface Address {
    street: string,
    city: string,
    country: string
}

//type logLevel = 'warning' | 'error' | 'info';
enum LogLevel {
    Warning = 'warning',
    Error = 'Error',
    Info = 'Info'
}

class DataRepository<T extends {type: string}> {
    get data(){
        return this._data;
    }

    constructor(private _data: T[], 
                private _logger: (msg: string, level?: LogLevel) => void){
    }

    find(prop: keyof T, val: any): T | undefined {
        this._logger(`Looking for "${prop} == ${val}"`);

        return this.data.find((item) => item[prop] == val)
    }
}

function logger(msg: string) {
    console.log('[MY APP]', msg);
}

const repository = new DataRepository<Person>([
        {type: 'person', firstName: 'Ivan', lastName: 'Ivanov', age: 29},
        {type: 'person', firstName: 'Vladimir', lastName: 'Savin', age: 18},
        {type: 'person', firstName: 'Anna', lastName: 'Pavlova'},
        {type: 'person', firstName: 'Margaret', lastName: 'Smith', age: 26},
        {type: 'person', firstName: 'Sergey', lastName: 'Sergeev'}
    ], logger);

const person = repository.find('firstName', 'Margaret');
console.dir(person);

//-----------------------------------------------------------
interface Employee {
    type: 'employee';
    id?: number;
    firstName: string,
    lastName: string,
}

//const emp: Employee | undefined = person;

function isPerson(obj: any): obj is Person { 
    return obj &&  obj.hasOwnProperty('type') &&
        obj['type'] == 'person';
}

/*if(isPerson(emp)){
    console.log(`Age: ${emp.age || 0}`);
}*/
//-----------------------------------------------------------
console.log(({} as Person | undefined)!.firstName);
//-----------------------------------------------------------
const data: {[id: string]: Person | Employee;}  = json as any;
for(const item in data){
    if(!data.hasOwnProperty(item)) continue;
    const val = data[item];
    if(val.type == 'person'){
        console.log(
        `Person: ${val.firstName} ${val.lastName} ${val.age || ''}`);
    }else{
        console.log(`Employee: ${val.id} ${val.firstName} ${val.lastName}`);
    }
}