/*
    object = {
        key: value,
        key: value,
        key: value,
    }

    object.key -> value
*/

const obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc',
    'a b c': 'abcdefghijklmnopqrstuvwxyz',
};

console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj['a']);
console.log(obj['b']);
console.log(obj['a b c']);

const objSize = Object.keys(obj).length;
console.log(objSize);
console.log(Object.keys(obj));


const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    children: [],
    color: 'blue',
    interest: 'sports cars',
}

console.log(person);
console.log(person.name);

const interest = 'isMarried';
console.log(person[interest]);
console.log(person['isMarried']);
console.log(person.isMarried);

// console.log(person.interest);

const req = {
    get: () => 'get request answer',
    post: () => 'post request answer',
    put: () => 'put request answer',
    delete: () => 'delete request answer',
}

const req2 = {};
req2.get = () => 'get request answer';
req2.post = () => 'post request answer';
req2.put = () => 'put request answer';
req2.delete = () => 'delete request answer';

const userAction = 'post';

const res = req[userAction]();
console.log(res);

const res2 = req2[userAction]();
console.log(res2);


const matematika = {};

const veiksmas = '+';
const pirmas = 7;
const antras = 5;

const rezultatas = 12;
console.log(`${pirmas} ${veiksmas} ${antras} = ${rezultatas}`);