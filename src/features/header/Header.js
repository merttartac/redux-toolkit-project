import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Content } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                Counter
            </Link>

            <Link to='/posts'>
                Posts
            </Link>
        </Content>
    </Wrapper>
);

export default Header;