import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { setBotActive, setBotPlays } from "../state/actions";
import { getBotActive, getBotPlays } from "../state/selectors";

const RUN_BOT = "Run bot?"

const Solver = () => {
    const botActive = useSelector(getBotActive)
    const botPlays = useSelector(getBotPlays)
    const dispatch = useDispatch()
    const handleCheckboxChange = () => {
        dispatch(setBotActive())
    }
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={botActive}
                    onChange={handleCheckboxChange}
                />
                {RUN_BOT}
            </label>
            <button 
                key="increase"
                onClick={() => {dispatch(setBotPlays(1))}}
            >
                Increase   
            </button>
            <button
                key="decrease"
                onClick={() => {dispatch(setBotPlays(-1))}}
            >
                Decrease
            </button>
            <label>
                Bot Plays: {botPlays}
            </label>
        </div>
    )
}

export default Solver
