import React from 'react';
import noPhoto from '../../assets/noPhotoSmall.png'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr;
    margin-bottom: 19px;
    transition: 0.3s;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover {
        outline: solid 1px #E0E0E0;
    }
`;
const Initials = styled.div`
    border-radius: 0 8px 8px 0;
    border-left: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 14px;   
    &:hover {
        background-color: #E0E0E0;
    }
`;
const Name = styled.div`
    white-space: nowrap;         
    overflow: hidden;           
    text-overflow: ellipsis;     
    max-width: 100%;
    display: block;
    font-size: 14px;
    color: #333333;       
`;
const Email = styled.div`
    white-space: nowrap;         
    overflow: hidden;           
    text-overflow: ellipsis;    
    max-width: 100%;           
`;

const EmpolyeeSearchPreview = ({user, onSelectUser}) => {
    return (
        <Container onClick={() => onSelectUser(user)}>
            <img width="70" height="70" src={noPhoto} alt="" />
            <Initials>
                <Name className='fw-m'>{user?.name}</Name>
                <Email>{user?.email}</Email>
            </Initials>
        </Container>
    );
};

export default EmpolyeeSearchPreview;