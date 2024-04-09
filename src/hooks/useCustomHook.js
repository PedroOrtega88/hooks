
import { useState, useEffect } from 'react';

export const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [loading,setLoading]= useState(true)
  

  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('eror');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchData();

    return () => {
    };
  }, [url]);

  return data;
};

export default useCustomHook;
