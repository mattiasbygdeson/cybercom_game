import axios from 'axios';
import https from 'https';
import qs from 'qs';

const url = "https://cybercom-game-api.herokuapp.com/api/score";
// const url = "http://localhost:8080/api/score";

const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  paramsSerializer: params => qs.stringify(params),
});

// Exports
async function getScoreList() {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

async function setScore(name, education, phone, score) {
  try {
    const response = await instance.post(url, {
      name: name,
      education: education,
      phone: phone,
      score: score
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

async function removeScore(id) {
  try {
    const response = await instance.delete(url + "/" + id);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export {
  getScoreList, setScore, removeScore
};