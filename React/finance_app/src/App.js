import React, { useState, useEffect } from 'react';
import api from './api';

const App = () => {
  const [transaction, setTransaction] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: '',
  });

  const fetchTransactions = async () => {
    const response = await api.get('/transaction/');
  };
};

export default App;
