import React, { useEffect } from 'react';
import { useState } from 'react'
import Header from '../header/Header';
import Input from '../input/Input'
import SearchResult from './SearchResult'
import styled from 'styled-components';
import EmployeeCard from '../employeeCard/EmployeeCard'
import axios from 'axios';


const Main = styled.div`
  max-width: 1266px;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
`;

const Container = styled.div`
    display: flex;
    border-radius: 8px;
    box-shadow: 2px 2px 9px 0px rgba(0,0,0,0.20);
    -webkit-box-shadow: 2px 2px 9px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 2px 2px 9px 0px rgba(0,0,0,0.20);
`;

const Sidebar = styled.div`
    max-width: 291px;
    min-width: 291px;
    border-right: 1px solid #E0E0E0;
    padding: 27px 31px 27px 20px;
`;

const DefaultText = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

const HeaderText = styled.h2`
    margin-bottom: 15px;
`;

const EmployeeSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allUsers, setAllUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const noResult = !searchResults.length && searchQuery && !loading && !error;
    const defaultResult = !searchQuery && !loading && !error;

   const getUsers = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

            setAllUsers(response.data);

        } catch (error) {
            setError('Ошибка при выполнении запроса. Пожалуйста, попробуйте еще раз.');
        } finally {
            setLoading(false);
        }
    }; 

    useEffect(()=> {
        getUsers()
    }, [])

    const handleSearchChange = (event) => {
        const queryValues = event.target.value.split(',').map((el) => el.trim().toLowerCase());
    
        if (queryValues.some((value) => !value)) {
            setSearchResults([]);
            setSearchQuery(event.target.value);
            return;
        }
    
        const filteredUsers = allUsers.filter((user) => {
            const lowerCaseName = user.name.toLowerCase();
            return queryValues.some((value) =>
                lowerCaseName.includes(value) || String(user.id).includes(value)
            );
        });
    
        setSearchResults(filteredUsers);
        setSearchQuery(event.target.value);
    };
    
    
    return (
        <Main>
            <Header />
            <Container className='container'>
                <Sidebar className='sidebar'>
                    <Input 
                        label="Поиск сотрудников"
                        placeholder="Введите Id или имя"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <HeaderText className='fw-m fz-n'>Результат</HeaderText>
                    {defaultResult && <DefaultText>начните поиск</DefaultText>}
                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {noResult && <p>ничего не найдено</p>}
                    <SearchResult results={searchResults} onSelectUser={setSelectedUser} />
                </Sidebar>
                <EmployeeCard user={selectedUser}/>
            </Container>
        </Main>
    );
};

export default EmployeeSearch; 