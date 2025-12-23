'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NotificationOutlined } from '@ant-design/icons';
import {
  DeleteIcon,
  DownloadIcon,
  SwitchIcon,
  ThemeBlueButtonIcon,
  ThemeDarkButtonIcon,
  ThemeSynthButtonIcon,
} from '@/components/icons';
import NotificationsPopup from '@/components/notificationsPopup';
import ResetPopup from '@/components/resetPopup';
import ToggleBtn from '@/components/toggleBtn';
import CustomHost from '@/components/customHost';
import { handleDataExport } from '@/lib';
import { getStoredData, writeStoredData } from '@/lib/localStorage';
import { ThemeName, showThemeName } from '@/theme';
import './styles.scss';

const themeIcon = (t: ThemeName) => {
  switch (t) {
    case 'dark':
      return <ThemeDarkButtonIcon />;
    case 'synth':
      return <ThemeSynthButtonIcon />;
    case 'blue':
      return <ThemeBlueButtonIcon />;
    default:
      return <ThemeDarkButtonIcon />;
  }
};

interface HeaderP {
  handleThemeSelection: (t: ThemeName) => void;
  theme: ThemeName;
  host: string;
  handleAboutPopupVisibility: () => void;
  isResetPopupDialogVisible: boolean;
  isNotificationsDialogVisible: boolean;
  isCustomHostDialogVisible: boolean;
  handleResetPopupDialogVisibility: () => void;
  handleNotificationsDialogVisibility: () => void;
  handleCustomHostDialogVisibility: () => void;
}

const Header = ({
  handleThemeSelection,
  theme,
  host,
  handleAboutPopupVisibility,
  isResetPopupDialogVisible,
  isNotificationsDialogVisible,
  handleResetPopupDialogVisibility,
  handleNotificationsDialogVisibility,
  isCustomHostDialogVisible,
  handleCustomHostDialogVisibility,
}: HeaderP) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

  const handleThemeSwitchesVisibility = () => {
    setIsSelectorVisible(!isSelectorVisible);
  };

  const setTheme = (t: ThemeName) => () => handleThemeSelection(t);

  const isThemeSelected = (t: ThemeName) => ThemeName.eq.equals(t, theme);
  const themeButtonStyle = (t: ThemeName) =>
    `${isSelectorVisible && '__selector_visible'} ${isThemeSelected(t) && '__selected'} ${
      !isSelectorVisible && '__without_bg'
    }`;

  const ThemeButton = ({ theme: t }: { theme: ThemeName }) => (
    <button type="button" className={themeButtonStyle(t)} onClick={setTheme(t)}>
      {themeIcon(t)}
      {showThemeName.show(t)}
    </button>
  );

  const data = getStoredData();
  const [inputData, setInputData] = useState({
    responseExport: data.responseExport,
  });

  const handleToggleBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentStoredData = getStoredData();
    setInputData({ ...inputData, responseExport: e.target.checked });
    writeStoredData({ ...currentStoredData, responseExport: e.target.checked });
  };

  return (
    <div id="header" className="header">
      <div>interactsh</div>
      <div role="button" onClick={handleThemeSwitchesVisibility} tabIndex={0} aria-hidden="true">
        <ThemeButton theme="dark" />
        <ThemeButton theme="synth" />
        <ThemeButton theme="blue" />
      </div>

      <div>Auto Download</div>
      <div>
        <ToggleBtn
          name="responseExport"
          onChangeHandler={handleToggleBtn}
          value={inputData.responseExport}
        />
      </div>

      <div className="links">
        <button
          type="button"
          title="Switch host"
          className="custom_host_active"
          onClick={handleCustomHostDialogVisibility}
        >
          <SwitchIcon />
          {host}
        </button>
        <button type="button" title="Reset data" onClick={handleResetPopupDialogVisibility}>
          <DeleteIcon />
          Reset
        </button>
        <button type="button" title="Notifications" onClick={handleNotificationsDialogVisibility}>
          <NotificationOutlined style={{ marginRight: '10px' }} />
          Notifications
        </button>
        <button type="button" title="Export" onClick={handleDataExport}>
          <DownloadIcon />
          Export
        </button>
        <div className="vertical_bar" />
        <Link href="/terms">Terms</Link>
        <button type="button" onClick={handleAboutPopupVisibility}>
          About
        </button>
      </div>
      {isCustomHostDialogVisible && (
        <CustomHost handleCloseDialog={handleCustomHostDialogVisibility} />
      )}
      {isResetPopupDialogVisible && (
        <ResetPopup handleCloseDialog={handleResetPopupDialogVisibility} />
      )}
      {isNotificationsDialogVisible && (
        <NotificationsPopup handleCloseDialog={handleNotificationsDialogVisibility} />
      )}
    </div>
  );
};

export default Header;
