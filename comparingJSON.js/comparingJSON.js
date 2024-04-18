function areObjectsEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
     let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for ( let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

 let obj1 = { name: "person1", age: 5 };
 let obj2 = { age: 5, name: "person1" };

console.log(areObjectsEqual(obj1, obj2));



// areObjectsEqual correctly compares two objects for equality, considering both keys and values. 
// The function iterates through the keys of both objects, ensuring that each key exists in both objects and that the corresponding values match.
//  If any key-value pair differs, the function returns false; otherwise, it returns true.

// In your example, the objects obj1 and obj2 have the same properties (name and age) but in a different order. 
// Your function correctly identifies them as equal.