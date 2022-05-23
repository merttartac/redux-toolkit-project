import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
//Styles
import { Wrapper, Content } from './Posts.styles';
import PostAuthor from './PostAuthor';
import PostTime from './PostTime';
import ReactionButtons from './ReactionButtons';

const Posts = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />
            <PostTime date={post.date} />
            <ReactionButtons post={post}/>
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