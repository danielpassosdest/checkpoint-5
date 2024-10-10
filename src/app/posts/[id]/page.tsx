"use client"

import { useParams } from 'next/navigation';
import React from 'react';

const PostDetail: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <h1>Detalhes da Notícia {1}</h1>
            <p>Notícia {1} Sem dúvida, uma das notícias mais impressionantes do ano envolve uma “chuva de vermes” ocorrida na China, que viralizou no TikTok, com imagens de tiras pretas cobrindo carros e orientações para as pessoas usarem guarda-chuvas. Diversos cientistas chineses investigaram essas aparições, mas nenhuma razão oficial foi dada. Algumas justificativas atribuem a um fenômeno, conhecido como “lua cheia das minhocas”, que acontece todo mês de março, antes da chegada da primavera no país. O nome tem relação com o início do período de colheita, que é a fase fértil do ano. </p>
            <h1>Detalhes da Notícia {2}</h1>
            <p>Notícia {2} Uma nova espécie de tubarão de profundidade com olhos brancos brilhantes foi identificada, décadas depois que uma fêmea grávida morta foi coletada pela primeira vez na costa da Austrália Ocidental.</p>
            { }
        </div>
    );
};

export default PostDetail;