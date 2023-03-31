import './Converter.css';

export const Converter = () => {
    return (
        <>
            <div className={'converterContainer'}>
                <div className={'inputContainer'}>
                    <div className={'startUnitContainer'}>
                        <label htmlFor="startUnit">Start unit</label>
                        <input type="number"/>
                        <select name="startUnit" id="startUnit">
                            <option value="1">m</option>
                            <option value="10">dm</option>
                            <option value="100">cm</option>
                            <option value="1000">mm</option>
                        </select>
                    </div>

                    <div className={'convertedToContainer'}>
                        <label htmlFor="endUnit">Convert to</label>
                        <select name="endUnit" id="endUnit">
                            <option value="1">m</option>
                            <option value="10">dm</option>
                            <option value="100">cm</option>
                            <option value="1000">mm</option>
                        </select>
                    </div>

                    <div className={'resultContainer'}>
                        <label htmlFor={'result'}>Result</label>
                        <input type="text" name={'result'} id={'result'} readOnly={true}/>
                    </div>

                </div>
            </div>
        </>
    )
}