import { NextSeo } from 'next-seo'
import SocialLinks from 'components/SocialLinks'

import { MainContent } from 'styles/base'

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre mim | Bruno Ardel"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://brunoardel.netlify.app/assets/img/blog-cover.png',
        site_name: 'Bruno Ardel',
        title: 'Bruno Ardel',
        images: [
          {
            url: 'https://brunoardel.netlify.app/assets/img/blog-cover.png',
            width: 1200,
            height: 630,
            alt: 'Bruno Ardel Blog'
          }
        ]
      }}
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Bruno, nasci em São Paulo - SP, morando desde 2003 em Jundiaí
        - SP. Entusiasta de tecnologias Front-End.
      </p>

      <p>
        Comecei na tecnologia em 2011 trabalhando como analista de suporte na{' '}
        <a
          href="https://www.bematech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bematech
        </a>{' '}
        (comprada pela{' '}
        <a
          href="https://www.totvs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Totvs
        </a>{' '}
        em 2017). No dia a dia era muito comum estar atendendo um chamado e ter
        que chamar um desenvolvedor para ajudar, e lá minha um dev com seu
        notebook mexendo em um monte de código que eu não entendi absolutamente
        nada, mas eu queria! Eu queria construir coisas, como aqueles caras
        construiam!
      </p>
      <p>
        Em 2014 comecei a estudar{' '}
        <strong>Gestão de Tecnologia de Informação</strong>, mas é uma area
        muito burocrática e eu queria <strong>código</strong> (talvez um dia eu
        volte em formato Pós-Graduação). Em 2015 troquei o curso para{' '}
        <strong>Analise e Desenvolvimento de Sistema</strong>, aí sim, melhorou
        bastante!
      </p>
      <p>
        Trabalhei em algumas empresas como{' '}
        <a
          href="https://www.trinitygroup.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trinity
        </a>
        ,{' '}
        <a
          href="https://new.reebokclub.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reebok
        </a>
        , {''}
        <a
          href="https://artit.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Art IT
        </a>
        , {''}
        <a
          href="https://claro.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claro
        </a>
        {''} e {''}
        <a
          href="https://www.galgosistemas.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Galgo
        </a>
        .
      </p>
      <p>
        No meu tempo livre gosto de ajudar amigos em alguns grupos de
        desenvolvimento no WhatsApp e Slack, caminhar ouvindo podcasts,
        encontrar meu amigos e fazer churrasco fazendo música.
      </p>
      <p>
        A, tambem sou DJ e produtor de música eletrônica (quando a criatividade
        músical resolve aparecer{' '}
        <span role="img" aria-labelledby="emoji smiling">
          &#128514;
        </span>
        ). Ouça minhas músicas no{' '}
        <a
          href="https://open.spotify.com/artist/0bdHFfPNrKNr0MR56NdCkM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        ,{' '}
        <a
          href="https://music.apple.com/us/artist/broken-bureau/447721276"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Music
        </a>
        ,{' '}
        <a
          href="https://soundcloud.com/brokenbureau"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soundcloud
        </a>{' '}
        e{' '}
        <a
          href="https://www.beatport.com/artist/broken-bureau/120738/tracks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beatport
        </a>
        .
      </p>
      <p>
        Fui ganhador da última edição do MasterChef em uma das realidades
        alternativas do multiverso da Marvel.
      </p>
      <p>
        Estou sempre anotando coisas no blocos de notas ou Notepad++, mas sempre
        me perco com eles quando preciso consultar... Por isso criei este blog!
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
)

export default AboutPage
