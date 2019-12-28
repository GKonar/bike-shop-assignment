import axios from 'axios';

const apiUrl = 'http://localhost:3000';

class Requests {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getBike(bikeId) {
    const bikeUrl = `${this.apiUrl}/bikes/${bikeId}`;
    const response = await axios.get(bikeUrl);
    return response.data;
  }

  async getBikes() {
    const bikesUrl = `${this.apiUrl}/bikes`;
    const response = await axios.get(bikesUrl);
    return response.data;
  }

  async getFaq() {
    const faqUrl = `${this.apiUrl}/faq`;
    const response = await axios.get(faqUrl);
    return response.data;
  } 
}

const requests = new Requests(apiUrl);
export default requests;
