// 設定項目
const Set = function (key, valueObj) {
    try {
      const _data = JSON.stringify(valueObj);
      localStorage.setItem(key, _data);
      return true;
    } catch (error) {
      return false;
    }
  };
  
  // 提取項目
  const Get = function (key = "") {
    try {
      const _data = localStorage.getItem(key);
      return JSON.parse(_data);
    } catch (error) {
      return undefined;
    }
  };
  
  // 清除項目
  const Remove = function (key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  };
  
  // 清除項目
  const RemoveAll = function () {
    try {
      localStorage.clear(); // 全清
    } catch (error) {
      return false;
    }
  };
  
  export default {
    Set,
    Get,
    Remove,
    RemoveAll,
  }