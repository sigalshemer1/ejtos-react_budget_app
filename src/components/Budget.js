
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch} = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        if( event.target.value >= totalExpenses){
            if(event.target.value<=20000){
                setNewBudget(event.target.value);
                dispatch({
                    type: 'SET_BUDGET',
                    payload: event.target.value
                });
            }else{
                alert('The budget is too high!');
            }
        }else{
            alert('The budget must be higher then the amount spent so far!');
        }
        
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: £{budget}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
