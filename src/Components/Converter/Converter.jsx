import './Converter.css';
import {useState} from "react";

export const Converter = () => {
    const [unitType, setUnitType] = useState(1);
    const [userValue, setUserValue] = useState('');
    const [startUnit, setStartUnit] = useState(1);
    const [endUnit, setEndUnit] = useState(1);

    function unitConverter (userValue, startUnit, endUnit) {
        const userValueInMeter = parseFloat(userValue) / startUnit;
        const convertedUserValue = userValueInMeter * endUnit;
        return isNaN(convertedUserValue) ? "" : convertedUserValue.toFixed(2);
    }

    function handleReset () {
        setUserValue('');
        setStartUnit(1);
        setEndUnit(1);
    }


    return (
        <>
            <div className={'converterContainer'}>
                <div>
                    <select name="unitType" id="unitType" value={unitType} onChange={e => {setUnitType(parseInt(e.target.value))}}>
                        <option value={1}>Unités de mesure de longueur ( m - dm - cm - mm )</option>
                        <option value={2}>Unités de capacité ( l - dl - cl - ml )</option>
                    </select>
                </div>
                <div className={'inputContainer'}>
                    <div className={'startUnitContainer'}>
                        <label htmlFor="startUnit">Unité de départ</label>
                        <input type="number" value={userValue} onChange={e => {setUserValue(e.target.value)}}/>
                        <select name="startUnit" id="startUnit" value={startUnit} onChange={e => {setStartUnit(parseInt(e.target.value))}}>
                            <option value={1}>m</option>
                            <option value={10}>dm</option>
                            <option value={100}>cm</option>
                            <option value={1000}>mm</option>
                        </select>
                    </div>

                    <div className={'convertedToContainer'}>
                        <label htmlFor="endUnit">Convertir en</label>
                        <select name="endUnit" id="endUnit" value={endUnit} onChange={e => {setEndUnit(parseInt(e.target.value))}}>
                            <option value={1}>m</option>
                            <option value={10}>dm</option>
                            <option value={100}>cm</option>
                            <option value={1000}>mm</option>
                        </select>
                    </div>


                    <div className={'resultContainer'}>
                        <label htmlFor={'result'}>Résultat</label>
                        <input type="text" name={'result'} id={'result'} readOnly={true} value={unitConverter(userValue, startUnit, endUnit)}/>
                        <button onClick={handleReset}>Reset</button>
                    </div>

                </div>
            </div>
        </>
    )
}