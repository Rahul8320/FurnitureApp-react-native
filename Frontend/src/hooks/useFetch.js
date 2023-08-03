import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://192.168.0.164:3000/products/');
      setData(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };
  return {data, error, loading, refetch};
}

export default useFetch;
