'use client';

import React, { useState } from 'react';
import { CloseIcon, DeleteIcon, DownloadIcon, LoaderIcon } from '@/components/icons';
import { handleDataExport, register } from '@/lib';
import { getStoredData, writeStoredData } from '@/lib/localStorage';
import './styles.scss';

interface ResetPopupP {
  handleCloseDialog: () => void;
}

const ResetPopup = ({ handleCloseDialog }: ResetPopupP) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConfirm = () => {
    setIsLoading(true);
    const currentStoredData = getStoredData();
    setTimeout(() => {
      register(currentStoredData.host, currentStoredData.token, true, false)
        .then((d) => {
          setIsLoading(false);
          localStorage.clear();
          writeStoredData(d);
          handleCloseDialog();
          window.location.reload();
        })
        .catch(() => {
          setIsLoading(false);
        });
    }, 50);
  };

  return (
    <div className="backdrop_container">
      <div className="dialog_box">
        <div className="header">
          <span>Reset interactsh.com</span>
          <CloseIcon onClick={handleCloseDialog} style={{ cursor: 'pointer' }} />
        </div>
        <span>
          Please confirm the action, this action can&apos;t be undone and all the client data will be
          deleted immediately. You can download a copy of your data in JSON format by clicking the
          Export button below or in top right.
        </span>
        <div className="buttons">
          <button type="button" title="Export" className="button" onClick={handleDataExport}>
            Export <DownloadIcon />
          </button>
        </div>
        <div className="buttons">
          <button
            type="button"
            disabled={isLoading}
            className="confirm_button"
            onClick={handleConfirm}
          >
            Confirm {isLoading ? <LoaderIcon /> : <DeleteIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPopup;
