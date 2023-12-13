import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://dummyjson.com/products/category/furniture',
      );
      setData(response.data.products);
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
