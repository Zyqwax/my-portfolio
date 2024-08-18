import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Article = (props) => {
  const { title, description, date, link } = props;

  return (
    <React.Fragment>
      <div className='homepage-article'>
        <div className='homepage-article-content'>
          <div className='homepage-article-date'>|&nbsp;&nbsp;&nbsp;{date}</div>
          <div className='homepage-article-title'>{title}</div>
          <div className='homepage-article-description'>{description}</div>
          <div className='homepage-article-link'>
            <Link href={link}>
              Makaleye git <FontAwesomeIcon style={{ fontSize: '10px' }} icon={faChevronRight} />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Article;
