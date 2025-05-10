import { useReservation } from '@/hooks/useReservation';
import Modal from '@/components/common/Modal';

interface ReservationFormProps {
  onClose: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onClose }) => {
  const { formData, handleChange, handleSubmit, loading, error } = useReservation();

  return (
    <Modal isOpen={true} onClose={onClose}>
      <h2 className="text-2xl font-bold text-purple-600 mb-4">예약 정보 입력</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">나이</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">성별</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">선택</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 disabled:bg-gray-400"
        >
          {loading ? '제출 중...' : '제출'}
        </button>
      </form>
    </Modal>
  );
};

export default ReservationForm;