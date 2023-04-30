import { useState, useEffect } from 'react';

function useDataFind(data, id) {
  const [foundData, setFoundData] = useState({});

  useEffect(() => {
    const foundItem = data.find((item) => item.id === id);
    // console.log(foundItem)
    setFoundData(foundItem);
  }, [data, id]);

  return foundData;
}

export default useDataFind