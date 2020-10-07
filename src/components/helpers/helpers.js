export const getObjOfData = (formValues, target) => {
  let dataObj = {};
  formValues.map((val) => {
    dataObj[val] = target[val].value;
  });
  return JSON.stringify(dataObj);
};
