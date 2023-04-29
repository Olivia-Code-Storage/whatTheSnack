import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');
  const handler = (e) => {
    if(e.target.value !== '') setValue(e.target.value);
  }
  return [value, handler];
}

export default useInput