import React from 'react';

interface PostProps {
    id: number;
    title: string;
    content: string;
}

const Post: React.FC<PostProps> = ({ id, title, content }) => (
    <div className="post">
        <h2>
            <a href={`/posts/${id}`}>{title}</a>
        </h2>
        <p>{content}</p>
    </div>
);

export default Post;