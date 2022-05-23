import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
//Styles
import { Wrapper,Content } from './Posts.styles';
import PostAuthor from './PostAuthor';

const Posts = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.userId}/>
        </article>
    ))

    return (
        <Wrapper>
            <Content>
                <h2>Posts</h2>
                {renderedPosts}
            </Content>
        </Wrapper>
    )
}

export default Posts;