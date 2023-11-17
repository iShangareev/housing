import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    max-width: 240px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: start;
    gap: 22px;
    margin-bottom: 29px;

    label {
        font-weight: 600;
    }
`;

const InputSearch = styled.input`
    min-width: 240px;
    padding: 14px 16px;
    font-size: 14px !important;
    min-height: 46px;
    border: 1.5px solid #E9ECEF;
    border-radius: 8px;
    
    &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color:#76787D;
    }
`;

const Input = ({ label, placeholder, value, onChange }) => {
    return (
        <Container className='input-search'>
            <label className='input-search__label' for="searchQuery">{label}</label>
            <InputSearch
                className='input'
                type="search"
                id="searchQuery"
                name="employee"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />          
        </Container>
    );
};

export default Input;