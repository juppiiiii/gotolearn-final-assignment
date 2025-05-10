import axios from 'axios';

const API_URL = 'http://localhost:3000/api/reservations';

interface ReservationData {
  name: string;
  age: string;
  gender: string;
  email: string;
}

export const submitReservation = async (data: ReservationData) => {
  // const response = await axios.post(API_URL, data);
  // mock 데이터
  const response = {
    status: 200,
    data: {
      id: '12345',
      ...data,
    },
  };
  return response.data;
};