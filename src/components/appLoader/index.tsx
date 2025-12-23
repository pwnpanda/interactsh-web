'use client';

import React from 'react';
import { LogoIcon } from '@/components/icons';
import './styles.scss';

interface AppLoaderP {
  isRegistered: boolean;
  mode: string;
}

const AppLoader = ({ isRegistered, mode }: AppLoaderP) => (
  <div
    className="loader_container"
    style={{
      opacity: isRegistered ? 0 : 1,
      visibility: isRegistered ? 'hidden' : 'visible',
      zIndex: mode === 'loading' ? 110 : 10,
    }}
  >
    <div className="loader_content">
      {mode === 'loading' ? (
        <>
          <LogoIcon />
          <span>
            <span>interact</span>.sh
          </span>
        </>
      ) : (
        'Server Unavailable...'
      )}
    </div>
  </div>
);

export default AppLoader;
