import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
    display: flex;
    gap: 10px;
    padding: 0;
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 0;
`;

export const ListLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    color: #666bad;

    &.active {
        color: #3e2361;
    }
`;