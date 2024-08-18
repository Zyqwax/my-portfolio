import React, { useEffect } from 'react';
import Head from 'next/head';

import NavBar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';
import Article from '../components/articles/Article';

import INFO from '../data/user';
import SEO from '../data/seo';
import myArticles from '../data/articles';

const Articles = () => {
  const currentSEO = SEO.find((item) => item.page === 'articles');

  return (
    <React.Fragment>
      <Head>
        <title>{`Makaleler | ${INFO.main.title}`}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Head>

      <div className='page-content'>
        <NavBar active='articles' />
        <div className='content-wrapper'>
          <div className='articles-logo-container'>
            <div className='articles-logo'>
              <Logo width={46} />
            </div>
          </div>

          <div className='articles-main-container'>
            <div className='title articles-title'>{INFO.articles.title}</div>

            <div className='subtitle articles-subtitle'>{INFO.articles.description}</div>

            <div className='articles-container'>
              <div className='articles-wrapper'>
                {myArticles.map((article, index) => (
                  <div className='articles-article' key={(index + 1).toString()}>
                    <Article
                      key={(index + 1).toString()}
                      date={article.date}
                      title={article.title}
                      description={article.description}
                      link={'/' + article.slug}
                    />
                  </div>
                ))}
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
};

export default Articles;
