import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import CardsContainer from './components/CardsContainer.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Mocking data fetching; replace with actual fetch call
    const fetchData = async () => {
      const result = [
        { id: 1, title: "Branches", description: "Manage your branches..." },
        { id: 2, title: "Manage your account", description: "Configure your account settings..." },
        { id: 3, title: "Manage organizations", description: "Organize your people and work..." },
        { id: 4, title: "Manage billing", description: "Change subscriptions and payment details..." },
        { id: 5, title: "Authenticate to Abstract", description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning." },
        { id: 6, title: "Abstract support", description: "Get in touch with a human." }
      ];
      setData(result);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardsContainer data={filteredData} />
      <Footer />
    </div>
  );
}

export default App;
