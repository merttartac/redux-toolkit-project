import React from 'react'
import { Content, Wrapper } from './postsPage.styles';
import Posts from './../../features/posts/Posts';
import AddPost from '../../features/add-post/AddPost';

const PostsPage = () => {
  return (
    <Wrapper>
        <Content>
            <AddPost />
            <Posts />
        </Content>
    </Wrapper>
  )
}

export default PostsPage;
