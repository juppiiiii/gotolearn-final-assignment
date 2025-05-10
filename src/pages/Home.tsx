import { useState } from 'react';
import Button from '@/components/common/Button';
import ReservationForm from '@/components/reservation/ReservationForm';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">BTS Goods Reservation</h1>
      <Button onClick={openModal} text="예약 시작" />
      {isModalOpen && <ReservationForm onClose={closeModal} />}
    </div>
  );
};

export default Home;