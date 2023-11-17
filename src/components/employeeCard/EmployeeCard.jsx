import React from 'react';
import noPhoto from '../../assets/noPhoto.png'
import styled from 'styled-components';


const EmployeeInfo = styled.div`
    display: flex;
    padding: 30px 21px;
`;
const Title = styled.h2`
    display: flex;
    margin-bottom: 10px;
    word-break: break-word;
`;
const Phone = styled.div`
    margin-bottom: 20px;
    word-break: break-word;
`;
const Email = styled.div`
    margin-bottom: 10px;
    word-break: break-word;
`;
const Img = styled.img`
    min-width: 424px;
    margin-right: 61px;
`;
const About = styled.p`
    margin-top: 25px;
`;
const NoResult = styled.p`
    margin: auto;
    padding: 20px;
`;



const EmployeeCard = ({user, searchQuery}) => {
    return (
        <>
            {user && searchQuery ? (<EmployeeInfo>   
            <Img width="424" height="286" src={noPhoto} alt="" />
            <div>
                <Title className='fz-n fw-m'>{user?.name}</Title>
                <Email className='fz-s'>
                    <span className='text-dark fw-m'>email: </span>
                    <span>{user?.email}</span>
                </Email>
                <Phone className='fz-s'>
                    <span className='text-dark fw-m'>phone: </span>
                    <span>{user?.phone}</span>
                </Phone>
                <span className='text-dark fw-m'>О себе:</span>
                <About className='fz-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</About>
            </div>
            </EmployeeInfo>): 
            <NoResult>Выберите сотрудника, чтобы посмотреть его профиль</NoResult>}       
        </>
    );
};

export default EmployeeCard;