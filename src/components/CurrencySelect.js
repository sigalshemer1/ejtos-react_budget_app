import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
   // const { currency } = useContext(AppContext);
    //const [newCurrency, setNewCurrency] = useState(currency);
    const { dispatch} = useContext(AppContext);
    const [currs] = useState([
        ['Pound £'],
        ['Euro €'],
        ['Dollar $'],
        ['Rupee ₹']
    ]);
    const flatMatrix = currs.flat();
    const [selectedValue, setSelectedValue] = useState(flatMatrix[0]);

    
    const handleCurrencyChange = (event) => {
            setSelectedValue(event.target.value);
            const val=event.target.value.split(' ');
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val[1]
            });
    }
    return (
        <div className='alert alert-danger'>
            <select value={selectedValue} onChange={handleCurrencyChange}>
                {flatMatrix.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default CurrencySelect;