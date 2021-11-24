import axios from 'axios';

export default class Api {
  constructor(city) {
    this.API_KEY = 'fd6f65748b2fbec9a43a04f79cde91d1';
    this.API_SOURCE = 'https://api.openweathermap.org/data/2.5/forecast/';
    this.city = city;
    this.units = 'metric';
  }
  async getForecast() {
    const response = await axios.get(
      `${this.API_SOURCE}?q=${this.city}&units=${this.units}&appid=${this.API_KEY}`
    );
    return response.data;
  }
}
