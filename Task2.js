const person = {
    a: "1",
    b: "2",
}

function func1 (obj, string) {
    if (string in obj) {
        return document.write(true);
    } else {
        return document.write(false);
    }
}

func1(person, "a")

