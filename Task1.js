const person = {
    name: "Alex",
    age: "20",
    city: "Perm"
    
}

const student = Object.create(person);

student.ownCity = "Piter"

function myObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            document.write(key + ' ', obj[key] + ' ')
        }
    }
}

myObject(student)