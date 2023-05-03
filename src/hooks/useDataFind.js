import { useState, useEffect } from 'react';

function useDataFind(data, id) {
  const [foundData, setFoundData] = useState({});

  useEffect(() => {
    const foundItem = data.find((item) => item.id === id);
    setFoundData(foundItem);
  }, [data, id]);

  return foundData;
}

export default useDataFind