import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
//Styles
import { Wrapper, Content } from './PostAuthor.styles';

const PostAuthor = ({ userId }) => {

    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);

    return (
        <Wrapper>
            <Content>
                <span>test
                    by {author ? `${author.firstName} ${author.lastName}` : 'Unknown author'}`
                </span>
            </Content>
        </Wrapper>
    )
}

export default PostAuthor;