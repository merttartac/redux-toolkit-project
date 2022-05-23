import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const PostTime = ({ date }) => {

    let timeAgo = '';

    if (date) {
        const timestamp = parseISO(date);
        const timePeriod = formatDistanceToNow(timestamp);

        timeAgo = `${timePeriod} ago`;
    }



    return (
        <span title='timestamp'>
            <i>{timeAgo}</i>
        </span>
    )
}

export default PostTime;