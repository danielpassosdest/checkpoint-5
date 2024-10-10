import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Notícias da Meia-Noite</h1>
      </div>
      <h2>Aqui noticiamos coisas estranhas</h2>
      <p>
        <a className="button" href="/posts">Notícias</a>
      </p>
    </div>
  );
};

export default Home;