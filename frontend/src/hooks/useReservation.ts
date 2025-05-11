import { useState, ChangeEvent, FormEvent } from 'react';
import { submitReservation } from '@/api/reservationApi';
import { validateEmail } from '@/utils/validators';

interface FormData {
  name: string;
  age: string;
  gender: string;
  email: string;
}

export function useReservation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!formData.name || !formData.age || !formData.gender || !formData.email) {
      setError('모든 필드를 입력해주세요.');
      setLoading(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('유효한 이메일 주소를 입력해주세요.');
      setLoading(false);
      return;
    }

    try {
      await submitReservation(formData);
      setFormData({ name: '', age: '', gender: '', email: '' });
      alert('예약이 성공적으로 제출되었습니다!');
    } catch (err) {
      setError('예약 제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, error };
}