import { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      name: 'Ugali Matumbo',
      description: "Wednesday's Lunch",
      category: 'food',
      amount: 100,
      date: '2025-04-09',
    },
    {
      name: 'KPLC tokens',
      description: 'power tokens',
      category: 'utilities',
      amount: 2000,
      date: '2025-04-01',
    },
  ]);
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, formData]);
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: '',
    });
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p className="subheading">
        Start taking control of your finances with this app. Record, categorize, and analyze your spending.
      </p>
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <h3>Add Expense</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter expense name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Enter expense description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Enter expense category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Enter expense amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        <div className="table-container">
          <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <table>
            <thead>
              <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
