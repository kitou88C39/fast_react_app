import React, { useState, useEffect } from 'react';
import api from './api';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: '',
  });

  const fetchTransactions = async () => {
    const response = await api.get('/transaction/');
    setTransactions(response.data);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleInputChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
  };
};

export default App;
