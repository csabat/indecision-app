var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);


//let based vars

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);


const nameConst = 'Frank';

console.log(nameConst);


//block scoping

var fullName = 'Csabi Toth';
if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
