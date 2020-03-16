import React from 'react';
import IncomeCard from '../IncomeCard';
import '../../Income.css';

function RecurringIncome() {
    return (
        <>
            <div className="Make-Me-Scroll">
                <IncomeCard />
                <IncomeCard />
                <IncomeCard />
                <IncomeCard />
                <IncomeCard />
                <IncomeCard />
                <IncomeCard />
            </div>
        </>
    );
}

export default RecurringIncome;
