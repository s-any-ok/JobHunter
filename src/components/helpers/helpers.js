export const getObjOfData = (formValues, target) => {
  let dataObj = {};
  formValues.map((val) => (dataObj[val] = target[val].value));
  return dataObj;
};

export const createGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getDataTime = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + today.getDate() + "-" + (today.getMonth() + 1);
  return date;
};
