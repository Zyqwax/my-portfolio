import React, { useEffect } from 'react';
import Head from 'next/head';

import NavBar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';
import AllProjects from '../components/projects/Allprojects';

import INFO from '../data/user';
import SEO from '../data/seo';

const Projects = () => {
  const currentSEO = SEO.find((item) => item.page === 'projects');

  return (
    <React.Fragment>
      <Head>
        <title>{`Projeler | ${INFO.main.title}`}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Head>

      <div className='page-content'>
        <NavBar active='projects' />
        <div className='content-wrapper'>
          <div className='projects-logo-container'>
            <div className='projects-logo'>
              <Logo width={46} />
            </div>
          </div>
          <div className='projects-container'>
            <div className='title projects-title'>Gelişim Yolculuğumda İz Bırakan Projeler</div>

            <div className='subtitle projects-subtitle'>
              Lise yıllarım boyunca birçok projede yer aldım ve her birinden edindiğim deneyimlerle büyüdüm. Bu
              projelerin bir kısmı tamamlanmış, bir kısmı ise öğrenme sürecimde bıraktığım yarım kalmış çalışmalar. Çoğu
              açık kaynaklı ve başkalarının katkılarına açık. Eğer üzerinde çalıştığım projelere göz atmak veya
              geliştirme önerilerinde bulunmak isterseniz, kodlarımı incelemekten çekinmeyin. Başkalarıyla işbirliği
              yapmak, hem öğrenmek hem de yeni beceriler edinmek için mükemmel bir fırsat ve her zaman geri bildirimlere
              açığım.
            </div>

            <div className='projects-list'>
              <AllProjects />
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

export default Projects;
