import axios from 'axios';

export default class Api {
  constructor(city) {
    this.API_KEY = process.env.REACT_APP_API_KEY;
    this.API_SOURCE = process.env.REACT_APP_API_SOURCE;
    this.units = 'metric';
    this.apiInstance = axios.create({
      baseURL: `${this.API_SOURCE}?q=${city}&units=${this.units}&appid=${this.API_KEY}`,
    });
  }
  async getForecast() {
    const response = await this.apiInstance.get();
    return response.data;
  }
}
