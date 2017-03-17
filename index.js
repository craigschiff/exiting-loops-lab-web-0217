// function breakOut(array, changeValue, stopValue) {
//   array.forEach((item) => {
//     if (item!== stopValue) {
//       item = changeValue
//     } else {
//       return array
//     }
//   })
// }

function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    } else {
      return array
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  } return array
}

function findBy(array, findFn) {
  for(let i = 0; i < array.length; i += 1) {
    if (findFn(array[i])) {
      return array[i]
    }
    }
  }


// function keepGoing(array, changeValue, skipValue) {
//   for(let i = 0; i < array.length; i += 1) {
//     if (array[i] !== skipValue) {
//       array[i] = changeValue
//     } else {
//       continue
//     }
//   }
// }
