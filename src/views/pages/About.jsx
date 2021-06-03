import "./About.css";
import React from "react";

import Menu from "../../components/menu/Menu";

function About() {
  return (
    <div className="container-about">
      <header>
        <Menu />
      </header>
      <main>
        <div className="container-main">
          <div className="container-text">
            <div className="title">
              <h1>Nossa Empresa</h1>
            </div>

            <div className="text-about">
              <p>
                Nós somos uma empresa autônoma, onde que nosso principal
                propósito é a comercialização de plantas no geral, porém visando
                sempre o bem-estar primeiramente do plantio proporcionando
                produtos para melhoria da ambientação no geral. Em segundo lugar
                visamos também proporcionar a melhor experiência possível para
                nossos clientes, prestando total suporte para qualquer dúvidas
                em relação ao produto.
              </p>
              <p>
                Futuramente temos a intenção de expandir nosso negócio,
                disponibilizando cursos gratuitos e pagos com finalidade de
                melhorar o conhecimento da comunidade que gosta dessa área em
                especifico e facilitando para as pessoas que desejam adentrar em
                nosso mundo.
              </p>
            </div>
          </div>

          <div className="container-text">
            <div className="title">
              <h1>Nossa História</h1>
            </div>

            <div className="text-about">
              <p>
                Meu nome é Helena Sophia, fundadora e diretora da Namikoka
                Plants e meu carinho e amor para com as plantas não começou de
                cima e sim como um passa tempo, pois não tinha uma rotina para
                consumir o meu tempo no dia-a-dia e precisava ocupar a mente com
                algo. Pensando dessa forma, tive como gatilho de partida um
                vídeo no Youtebe que ensinava a cuidar de rosas do deserto. Tal
                vídeo despertou um tipo de amor que sinto por rosas do deserto,
                onde que posso dizer que esse amor se expandiu para outros tipos
                de plantas. Sendo assim, fiz um pedido pela internet de algumas
                sementes de rosas do deserto para cultivar, nunca com a
                finalidade de comercialização e sim para passar o tempo. Hoje,
                após alguns anos de prática e aprendizado, tive a oportunidade
                de abrir meu próprio E-commerce para distribuir minhas plantas,
                não só isso, como também pretendo compartilhar todo meu
                conhecimento adquirido na trajetória até hoje.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
