// to check callback as income param for function

if (typeof callback === 'function') {}

// it except no errors if we check undefined var that is not belong to global scope

var window = {};

if (process) {
    // this code will throw an error
}

if (typeof process !== undefined) {
    // this code will throw no errors
}
