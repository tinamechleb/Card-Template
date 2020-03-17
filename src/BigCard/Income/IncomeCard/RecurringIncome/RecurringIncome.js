import React from 'react';
import GrandIncomeCard from '../GrandIncomeCard';
import '../../Income.css';

function RecurringIncome() {
    return (
        <>
            <div className="Make-Me-Scroll">
                <GrandIncomeCard />
                <GrandIncomeCard />
                <GrandIncomeCard />
                <GrandIncomeCard />
                <GrandIncomeCard />
                <GrandIncomeCard />
                <GrandIncomeCard />
            </div>
        </>
    );
}

export default RecurringIncome;
