import React from 'react';
import Post from '../components/Post';

interface Post {
    id: number;
    title: string;
    content: string;
}

const Posts: React.FC = () => {
    const posts: Post[] = [
        { id: 1, title: 'Chuva de vermes na China', content: '“chuva de vermes” ocorrida na China' },
        { id: 2, title: 'Tubarão demônio da Austrália', content: 'Uma nova espécie de tubarão de profundidade com olhos brancos brilhantes foi identificada' },
    ];

    return (
        <div className="container">
            <h1>Notícias</h1>
            {posts.map(post => (
                <Post key={post.id} id={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default Posts;