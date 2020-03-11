import React from 'react';
import IncomeCard from './IncomeCard/IncomeCard';
import './Income.css';

function Income() {
    return (
        <>
            <div className="Income">
                <div>
                    <h3>Fixed incomes</h3>
                    <IncomeCard />
                    <IncomeCard />
                </div>
                <div className="vl"></div>
                <div>
                    <h3>Recurring incomes</h3>
                    <IncomeCard />
                    <IncomeCard />
                    <IncomeCard />
                </div>
            </div>

        </>
    );
}

export default Income;
