'use client';

import React, { ChangeEventHandler } from 'react';
import './styles.scss';

interface ToggleBtnP {
  name: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value: boolean;
}

const ToggleBtn = ({ name, onChangeHandler, value }: ToggleBtnP) => (
  <label className="switch">
    <input name={name} type="checkbox" checked={value} onChange={onChangeHandler} />
    <span className="slider round" />
  </label>
);

export default ToggleBtn;
