import _ from 'lodash';

const removeArrayElements = (array, numberOfElementsToRemove) => {
   return _.dropRight(array, numberOfElementsToRemove);
}


export {
    removeArrayElements
}