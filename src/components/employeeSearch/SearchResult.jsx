import React from 'react';
import EmpolyeeSearchPreview from '../employeeSearch/EmpolyeeSearchPreview'
import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    overflow-y: scroll;
    max-height: 55vh;
    overflow-x: hidden;
    scrollbar-gutter: auto;
    padding: 3px 5px 3px 3px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: #E0E0E0;
    }
`;

const SearchResult = ({ results, onSelectUser }) => {
    return (
        <Container>
            {results.map((user) => (
                <EmpolyeeSearchPreview 
                    key={user.id}
                    onSelectUser={onSelectUser}
                    user={user}/>
            ))}
        </Container>
    );
};

export default SearchResult;