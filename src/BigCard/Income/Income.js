import React from 'react';
import FixedIncome from './IncomeCard/FixedIncome/FixedIncome';
import RecurringIncome from './IncomeCard/RecurringIncome/RecurringIncome';


function Income() {
    return (
        <>
            <div className="Income">
                <div>
                    <h3>Fixed incomes <button className="Add-Butt">+</button></h3>
                    <FixedIncome />
                </div>
                <div className="vl"></div>
                <div>
                    <h3>Recurring incomes <button className="Add-Butt">+</button></h3>
                    <RecurringIncome />
                </div>
            </div>

        </>
    );
}

export default Income;
