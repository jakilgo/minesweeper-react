import React from 'react';
import { range } from 'lodash';
import { useSelector } from 'react-redux';
import { getGameConfig, getMinesCounter, getTimeCounter } from '../state/selectors';
import ThreeDigitCounter from './ThreeDigitCounter';
import SmileyButton from './SmileyButton';

const Header = () => {
  const config = useSelector(getGameConfig);
  const minesCounter = useSelector(getMinesCounter);
  const timeCounter = useSelector(getTimeCounter);
  const line = range(config.width).map(key => <div key={key} className="bordertb" />);
  return (
    <div className="msw-header">
      <div className="bordertl" />{line}<div className="bordertr" />
      <div className="borderlrlong"/>
      <ThreeDigitCounter value={minesCounter} id="mines" />
      <SmileyButton />
      <ThreeDigitCounter value={timeCounter} id="seconds"/>
      <div className="borderlrlong"/>
      <div className="borderjointl" />{line}<div className="borderjointr" />
    </div>
  );
}
export default Header;
