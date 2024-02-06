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
};

export default App;
