import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import NavBar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';

import INFO from '../data/user';
import articles from '../data/articles';
import Markdown from 'react-markdown';

export default function Page({ article }) {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{`${article.title} | ${INFO.main.title}`}</title>
        <meta name='description' content={article.description} />
        <meta name='keywords' content={article.keywords.join(', ')} />
      </Head>

      <div className='page-content'>
        <NavBar />

        <div className='content-wrapper'>
          <div className='read-article-logo-container'>
            <div className='read-article-logo'>
              <Logo width={46} />
            </div>
          </div>

          <div className='read-article-container'>
            <div className='read-article-back'>
              <img
                src='../back-button.png'
                alt='back'
                className='read-article-back-button'
                onClick={() => router.back()}
              />
            </div>

            <div className='read-article-wrapper'>
              <div className='read-article-date-container'>
                <div className='read-article-date'>{article.date}</div>
              </div>

              <div className='title read-article-title'>{article.title}</div>

              <div className='read-article-body'>
                <Markdown>{article.content}</Markdown>
              </div>
            </div>
          </div>
          <div className='page-footer'>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// Bu fonksiyon sunucu tarafında çalışır ve router parametrelerini alır
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const article = articles.find((a) => a.slug === slug) || {};

  return {
    props: { article }, // Bu props, Page bileşenine iletilir
  };
}
