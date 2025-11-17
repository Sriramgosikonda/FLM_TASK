import axios from 'axios';

export const fetchCompanies = async () => {
  try {
    const response = await axios.get('/db.json');
    return response.data.companies;
  } catch (error) {
    throw error;
  }
};