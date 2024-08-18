import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faStackOverflow, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Logo from '../components/common/Logo';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/Navbar';
import Article from '../components/homepage/Article';
import Works from '../components/homepage/Works';
import AllProjects from '../components/projects/Allprojects';

import INFO from '../data/user';
import SEO from '../data/seo';
import articles from '../data/articles';

export default function Homepage() {
  const currentSEO = SEO.find((item) => item.page === 'home');

  return (
    <React.Fragment>
      <Head>
        <title>{INFO.main.title}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Head>

      <div className='page-content'>
        <NavBar active='home' />
        <div className='content-wrapper'>
          <div className='homepage-logo-container'>
            <div className='homepage-logo'>
              <Logo width={80} link={false} />
            </div>
          </div>

          <div className='homepage-container'>
            <div className='homepage-first-area'>
              <div className='homepage-first-area-left-side'>
                <div className='title homepage-title'>{INFO.homepage.title}</div>

                <div className='subtitle homepage-subtitle'>{INFO.homepage.description}</div>
              </div>

              <div className='homepage-first-area-right-side'>
                <div className='homepage-image-container'>
                  <div className='homepage-image-wrapper'>
                    <img src='homepage.jpg' alt='about' className='homepage-image' />
                  </div>
                </div>
              </div>
            </div>

            <div className='homepage-socials'>
              <a href={INFO.socials.twitter} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faTwitter} className='homepage-social-icon' />
              </a>
              <a href={INFO.socials.github} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} className='homepage-social-icon' />
              </a>
              <a href={INFO.socials.stackoverflow} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faStackOverflow} className='homepage-social-icon' />
              </a>
              <a href={INFO.socials.instagram} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} className='homepage-social-icon' />
              </a>
              <a href={`mailto:${INFO.main.email}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faMailBulk} className='homepage-social-icon' />
              </a>
            </div>

            <div className='homepage-projects'>
              <AllProjects />
            </div>

            <div className='homepage-after-title'>
              <div className='homepage-articles'>
                {articles
                  .slice(0, 3)
                  .sort((a, b) => {
                    let dateA = new Date(a.date.replace(' ', ' ')); // Date objesine çevirme
                    let dateB = new Date(b.date.replace(' ', ' '));
                    return dateB - dateA; // Küçükten büyüğe sıralama
                  })
                  .map((article, index) => (
                    <div className='homepage-article' key={(index + 1).toString()}>
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

              <div className='homepage-works'>
                <Works />
              </div>
            </div>

            <div className='page-footer'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
