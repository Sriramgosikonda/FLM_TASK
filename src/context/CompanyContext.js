import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCompanies } from '../services/api';

const CompanyContext = createContext();

export const useCompanyContext = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(5);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
        setFilteredCompanies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadCompanies();
  }, []);

  useEffect(() => {
    let filtered = companies.filter(company =>
      company.name.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter === '' || company.location === locationFilter) &&
      (industryFilter === '' || company.industry === industryFilter)
    );

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredCompanies(filtered);
    setCurrentPage(1);
  }, [companies, search, locationFilter, industryFilter, sortBy]);

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const value = {
    companies: currentCompanies,
    totalCompanies: filteredCompanies.length,
    loading,
    error,
    search,
    setSearch,
    locationFilter,
    setLocationFilter,
    industryFilter,
    setIndustryFilter,
    sortBy,
    setSortBy,
    currentPage,
    companiesPerPage,
    paginate
  };

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
};