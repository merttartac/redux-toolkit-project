import React from 'react'
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';
import { Wrapper, Content } from './ReactionButtons.styles';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
                    {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <Wrapper>
            <Content>
                {reactionButtons}
            </Content>
        </Wrapper>
    )
}

export default ReactionButtons;