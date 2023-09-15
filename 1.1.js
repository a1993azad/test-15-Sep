const error = {
  invalidArray: "Array is not valid",
  invalidFunction: "Function is not valid",
  arrayMustBeArrayOfNumbers: "Array must be array of numbers",
};
function checkValidation(array, fn) {
  if (Array.isArray(array)) {
    const allISNumber = array.every((item) => typeof item === "number");
    if (allISNumber) {
      if (typeof fn === "function") {
        return true;
      } else {
        throw new Error(error.invalidFunction);
      }
    } else {
      throw new Error(error.arrayMustBeArrayOfNumbers);
    }
  } else {
    throw new Error(error.invalidArray);
  }
}

// Declarative
function mapArrayDeclarative(array, fn) {
  try {
    if (!!checkValidation(array, fn)) {
      return array.map(fn);
    }
  } catch (error) {
    return error;
  }
}

// Imperative

function mapArrayImperative(array, fn) {
  try {
    if (!!checkValidation(array, fn)) {
      const res = [];
      for (let i = 0; i < array.length; i++) {
        res.push(fn(array[i]));
      }
      return res;
    }
  } catch (error) {
    return error;
  }
}
