import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DifficultyOption, DIFFICULTY_OPTIONS } from '../model/Game';
import { setDifficulty } from '../state/actions';
import { getDifficulty } from '../state/selectors';
import './DificultySelector.css';

const CUSTOM = "custom"

enum changeTypes {
  HEIGHT,
  WIDTH,
  MINES
}

const DificultySelector = () => {
  const [inputs, setInputs] = useState({["height"]: 10, ["width"]: 10, ["mines"]: 10});
  const selectedDifficulty = useSelector(getDifficulty);
  const dispatch = useDispatch();

  const handleChange = (event: any, type: changeTypes) => {
    if (type === changeTypes.HEIGHT) {
      const height = event.target.value
      setInputs(values => ({...values, ["height"]: height}))
    } else if (type === changeTypes.WIDTH) {
      const width = event.target.value
      setInputs(values => ({...values, ["width"]: width}))
    } else if (type === changeTypes.MINES) {
      const mines = event.target.value
      setInputs(values => ({...values, ["mines"]: mines}))
    }
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const gameDifficulty: DifficultyOption = {
      label: CUSTOM,
      config: {
        height: inputs.height,
        width: inputs.width,
        mines: inputs.mines
      }
    }
    if (inputs.height >= 10 && inputs.width >= 10) dispatch(setDifficulty(gameDifficulty))
  }

  return (
    <div className="DS_options">
      {DIFFICULTY_OPTIONS.map(option => (
        <button
          key={option.label}
          className={classNames('DS_option', { DS_option_active: selectedDifficulty.label === option.label })}
          onClick={() => {
            dispatch(setDifficulty(option))
          }}
        >
          {option.label}
        </button>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Custom"
          key={CUSTOM}
          className={classNames('DS_option', { DS_option_active: selectedDifficulty.label === CUSTOM })}
        />
        <label>Height:
          <input
            type="number"
            name="height1"
            value={inputs.height}
            onChange={(event) => handleChange(event, changeTypes.HEIGHT)}
          />
        </label>
        <label>Width:
          <input
            type="number"
            name="width1"
            value={inputs.width}
            onChange={(event) => handleChange(event, changeTypes.WIDTH)}
          />
        </label>
        <label>Mines:
          <input
            type="number"
            name="mines"
            value={inputs.mines}
            onChange={(event) => handleChange(event, changeTypes.MINES)}
          />
        </label>
      </form>
    </div>
  );
}
export default DificultySelector;
