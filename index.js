// Write your solution in this file!
const employee = {
    name: 'Erin',
    streetAddress: '123 Clark St.'

};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newObj = {...employee};
    newObj[key] = value;

    return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployeeObj = {...employee};
    delete newEmployeeObj[key];
    return newEmployeeObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}