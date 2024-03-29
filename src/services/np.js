import axios from "axios";

export default new class NP {

  getCities(cb, prop) {
    let model = 'Address';
    let method = 'getCities';
    return this.axiosRequest(model, method, process.env.API_NP_KEY, prop, cb);
  }

  getWarehouses(cb, prop) {
    let model = 'AddressGeneral';
    let method = 'getWarehouses';
    return this.axiosRequest(model, method, process.env.API_NP_KEY, prop, cb);
  }

  axiosRequest = (model, method, apiKey, prop, cb) => {
    let data = JSON.stringify({
      "apiKey": apiKey,
      "modelName": model,
      "calledMethod": method,
      "methodProperties": prop,

    });
    axios({
        url: process.env.API_NP_URL,
        method: 'post',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        data: data
      })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        cb(res);
      })
      .catch((err) => {
        console.log('* ERROR * CATCH ', err);
      });
  }
}

