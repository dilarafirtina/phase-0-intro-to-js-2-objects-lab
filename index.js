// Write your solution in this file!
const employee = {
    name: "Dilara",
    streetAddress : "Gürsu"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let obj = {...employee}
    obj[key] = value
    return obj
}

updateEmployeeWithKeyAndValue(employee, "surname", "Fırtına");


const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value
    return obj
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "surname", "Fırtına");

const deleteFromEmployeeByKey = (employee, key) => {
    let obj = {...employee}
    delete obj[key]
    console.log(obj)
    return obj
}

deleteFromEmployeeByKey(employee, "name");


const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
   delete obj[key]
    return obj
}


destructivelyDeleteFromEmployeeByKey(employee, "name");