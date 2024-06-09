import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
	const { budget, dispatch,expenses, currency } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		const newBudget = parseInt(val);

		if (newBudget < totalExpenses) {
			alert("You cannot reduce the budget to less than the total allocated expenses!");
		} else if (newBudget > 20000) {
			alert("The budget can't exceed 20000!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: newBudget,
			});
		}
	};
	
	return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
			<input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
		</div>
	);
};

export default Budget;