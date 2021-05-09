const domain = "@shopapp";
const storeData = (key: string, value: string) => {
  return new Promise((resolve, reject) => {
    try {
      sessionStorage.setItem(`${domain}:${key}`, JSON.stringify(value));
      resolve("stored");
    } catch (e) {
      reject(e);
    }
  });
};

const getData = (key: string) => {
  return new Promise((resolve, reject) => {
    try {
      const value = sessionStorage.getItem(`${domain}:${key}`);
      if (!value) throw "no data";
      resolve(JSON.parse(value));
    } catch (e) {
      reject(e);
    }
  });
};

const clearAll = () => sessionStorage.clear();

export default { storeData, getData, clearAll };
