const employee = {
    name: 'Erin',
    streetAddress: '1234 Arthur Street'
};

const updateEmployeeWithKeyAndValue = function(employee, key, value) {
    
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

const destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value) {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = function(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey = function(employee, key) {
    delete employee[key];
    return employee;
}












































/*
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
*/