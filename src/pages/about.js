import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Bruno Ardel, nasci em São Paulo - SP, morando desde 2003 em
        Jundiaí - SP. Entusiasta de tecnologias Front-End.
      </p>
      <p>
        Já passei por empresas como{' '}
        <a
          href="http://www.bematech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bematech
        </a>
        ,{' '}
        <a
          href="https://www.totvs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Totvs
        </a>
        ,{' '}
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
        </a>{' '}
        e{' '}
        <a href="https://moss.earth/" target="_blank" rel="noopener noreferrer">
          Moss Earth
        </a>
        . Cursei <strong>Analise e Desenvolvimento de Sistema</strong> na
        Universidade Paulista, finalizado em 2018, mas antes disso, em 2011
        iniciei o curso de <strong>Gestão de Tecnologia de Informação</strong>{' '}
        na Unip, porem, o curso era muito pouco mão na massa e muito mais
        administrativo, aprendi coisas legais, mas eu queria mais código. Talvez
        um dia eu volte para esse assunto em formato de pós-graduação.
      </p>
      <p>
        Eu adoro trabalhar em equipe e sou bem comunicativo e criativo. No meu
        tempo livre, gosto de ajudar amigos em alguns grupos de desenvolvimento
        no WhatsApp e Slack.
      </p>
      <p>
        Tambem sou DJ e produtor de música eletrônica (quando a criatividade
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
  </Layout>
)

export default AboutPage
