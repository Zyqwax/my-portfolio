import React from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import Card from '../common/Card';

const Works = () => {
  return (
    <div className='works'>
      <Card
        icon={faBriefcase}
        title='Kariyer'
        body={
          <div className='works-body'>
            <div className='work'>
              <img src='./facebook.png' alt='facebook' className='work-image' />
              <div className='work-title'>Facebook</div>
              <div className='work-subtitle'>Yazılım Müh.</div>
              <div className='work-duration'>2019 - Present</div>
            </div>

            <div className='work'>
              <img src='./twitter.png' alt='twitter' className='work-image' />
              <div className='work-title'>Twitter</div>
              <div className='work-subtitle'>Yazılım Müh.</div>
              <div className='work-duration'>2019 - Present</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
