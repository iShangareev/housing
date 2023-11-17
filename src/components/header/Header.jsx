import React from 'react';
import logo from '../../assets/logo.svg'
import styled from 'styled-components';

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    &__login {
        align-self: flex-start;
        font-weight: 400;
    }
`;

const Header = () => {
    return (
        <Head className='header'>
            <a href="/" className="header__logo"><img src={logo} alt="Логотип жилфонд" /></a>
            <a href="" className='header__login'>Пользователь</a>            
        </Head>
    );
};

export default Header;