import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../posts/postsSlice';
import { selectAllUsers } from '../users/usersSlice';
//Styles
import { Wrapper, Content } from './AddPost.styles';

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const users = useSelector(selectAllUsers);
    
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName}
        </option>
    ))

    //Submit function
    const submitPost = () => {
        if (canSave) {
            dispatch(postAdded(title, content, userId));

            setTitle('');
            setContent('');
            setUserId('');
        }
    };

    return (
        <Wrapper>
            <Content>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    placeholder='Title'
                    value={title}
                    onChange={onTitleChanged} />

                <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                    <option value=''></option>
                    {userOptions}
                </select>

                <textarea
                    id='postContent'
                    name='postContent'
                    placeholder='Content'
                    value={content}
                    onChange={onContentChanged} />

                <button
                    type='button'
                    onClick={submitPost}
                    disabled={!canSave}>Add Post</button>
            </Content>
        </Wrapper>
    )
};

export default AddPost;