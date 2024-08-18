import React from 'react';
import Head from 'next/head';

import NavBar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';
import Socials from '../components/about/Socials';

import INFO from '../data/user';
import SEO from '../data/seo';

const Contact = () => {
  const currentSEO = SEO.find((item) => item.page === 'contact');

  return (
    <React.Fragment>
      <Head>
        <title>{`İletişim | ${INFO.main.title}`}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Head>

      <div className='page-content'>
        <NavBar active='contact' />
        <div className='content-wrapper'>
          <div className='contact-logo-container'>
            <div className='contact-logo'>
              <Logo width={46} />
            </div>
          </div>

          <div className='contact-container'>
            <div className='title contact-title'>İletişime Geçelim: Bana Ulaşmanın Yolları</div>

            <div className='subtitle contact-subtitle'>
              Bana ulaşma isteğiniz için teşekkür ederim! Geri bildirimleriniz, sorularınız ve önerileriniz benim için
              çok değerli. Eğer belirli bir konuda konuşmak veya fikir alışverişinde bulunmak isterseniz, lütfen
              doğrudan e-posta gönderin: &nbsp;<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. Genellikle
              24 saat içinde yanıt vermeye çalışıyorum, fakat okul ve projelerle meşgul olduğum dönemlerde bu süre biraz
              uzayabilir. Alternatif olarak, web sitemdeki iletişim formunu doldurarak da bana ulaşabilirsiniz. Tüm
              mesajlarınıza en kısa sürede geri dönüş yapacağım. Ayrıca, sosyal medyada da bağlantı kurabiliriz! Beni{' '}
              <a href={INFO.socials.instagram} target='_blank' rel='noreferrer'>
                {INFO.socials.instagram}
              </a>{' '}
              adresinde bulabilirsiniz. Orada projelerimle ilgili güncellemeler paylaşıyor ve takipçilerimle etkileşimde
              bulunuyorum. İlginiz ve desteğiniz için teşekkür ederim, sizden haber almayı sabırsızlıkla bekliyorum!
            </div>
          </div>

          <div className='socials-container'>
            <div className='contact-socials'>
              <Socials />
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

export default Contact;
