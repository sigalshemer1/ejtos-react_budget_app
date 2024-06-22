import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoMdAddCircle } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import { IconContext } from "react-icons";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
            <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
                <div>
                <IoMdAddCircle  size='2.5em' onClick={event=> increaseAllocation(props.name)}></IoMdAddCircle>
                </div>
            </IconContext.Provider>
            </td>
            <td>
                <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                    <div>
                        <TiDelete size='3em' onClick={handleDeleteExpense}></TiDelete>
                    </div>
                </IconContext.Provider>    
            </td>
        </tr>
    );
};

export default ExpenseItem;
