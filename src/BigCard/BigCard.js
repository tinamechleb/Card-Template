import React from 'react';
import Income from './Income/Income';
import Expenses from './Expenses/Expenses';
import Categories from './Categories/Categories';
import SavingGoals from './SavingGoals/SavingGoals';
import Tabs from './Tabs/Tabs';
import './BigCard.css';

function BigCard() {
    return (
        <div className="BigCard-Container">
            <div className="BigCard">
                <header className="Rest-Of-BigCard">
                    <Tabs>
                        <div label="Income">
                            <Income />
                        </div>
                        <div label="Expenses">
                            <Expenses />
                        </div>
                        <div label="Saving Goals">
                            <SavingGoals />
                        </div>
                        <div label="Categories">
                            <Categories />
                        </div>
                    </Tabs>
                </header>
            </div>
        </div >
    );
}

export default BigCard;
