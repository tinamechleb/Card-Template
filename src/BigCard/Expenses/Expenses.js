import React from 'react';
import FixedIncome from '../Income/IncomeCard/FixedIncome/FixedIncome';
import RecurringIncome from '../Income/IncomeCard/RecurringIncome/RecurringIncome';

function Expenses() {
    return (
        <>
            <div className="Income">
                <div>
                    <h3>Fixed expenses</h3>
                    <FixedIncome />
                </div>
                <div className="vl"></div>
                <div>
                    <h3>Recurring expenses</h3>
                    <RecurringIncome />
                </div>
            </div>

        </>
    );
}

export default Expenses;
