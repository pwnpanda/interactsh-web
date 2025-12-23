'use client';

import React from 'react';
import { RedoOutlined } from '@ant-design/icons';
import './styles.scss';

interface ErrorFallbackProps {
  retry: () => void;
}

export const RepoSidebarListErrorFallback = ({ retry }: ErrorFallbackProps) => (
  <div
    className="retry_error_fallback"
    style={{
      height: '26rem',
      background: 'transparent',
    }}
  >
    <button type="button" onClick={retry} className="error_box">
      <RedoOutlined />
    </button>
    <span className="error_msg">Request failed!</span>
  </div>
);

export const IssuesListErrorFallback = ({ retry }: ErrorFallbackProps) => (
  <div
    className="retry_error_fallback"
    style={{
      height: '26rem',
      background: 'transparent',
    }}
  >
    <button type="button" onClick={retry} className="error_box">
      <RedoOutlined />
    </button>
    <span className="error_msg">Request failed!</span>
  </div>
);

export const RepoSidebarListFallback = () => (
  <div
    style={{
      width: '100%',
      height: '78rem',
      background: 'rgba(150,150,150, 0.1)',
      borderRadius: '0',
    }}
  />
);

export const IssuesListFallback = () => (
  <div
    style={{
      width: '100%',
      height: '78rem',
      background: 'rgba(150,150,150, 0.1)',
      borderRadius: '0',
    }}
  />
);

