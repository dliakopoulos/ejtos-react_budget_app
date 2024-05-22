import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';

//import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container' id='main'>
                <h1 className='mt-3' id='title'>Company's Budget Allocation</h1>
                <div>
                    <div className='row mt-3' id='board'>
                    {/* Budget component */}
                    <div className='col-sm' id='budget'>
                        <Budget />
                    </div>
                    {/* Remaining component */}
                    <div className='col-sm' id='remaining'>
                        <Remaining />
                    </div>
                    {/* ExpenseTotal component */}
                    <div className='col-sm' id='exptotal'>
                        <ExpenseTotal />
                    </div>
                </div>           
                    {/* ExpenseList component */}
                    <div className='col-sm' id='explist'>
                        <ExpenseList />
                    </div>
                    {/* ExpenseItem component */}
                    <div className='col-sm' id='expitem'>
                        <ExpenseItem />
                    </div>
                    {/* AllocationForm component */}
                    <div className='col-sm' id='form'>
                        <AllocationForm />
                    </div>       

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
