import React, { Component } from "react";
import IncomeCard from './IncomeCard';
import './IncomeCard.css';
import { Accordion } from 'semantic-ui-react'


class GrandIncomeCard extends Component {

    state = { activeIndex: 0 }
    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex });
    }


    render() {

        let className = 'Income-Card';

        const { activeIndex, newIndex } = this.state


        if (activeIndex === 1) {
            className += ' Active-Title';
        }

        return (

            <div>
                <div id="accordion-basic">
                    <Accordion fluid styled>
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <div className={className}>
                                <p className="Income-Title">Title</p>
                                <p className="Income-amount">800$</p>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p className="surprise">
                                surprise
                            </p>
                        </Accordion.Content>
                    </Accordion>
                    <div className="Image Delete" />
                    <div className="Image Edit" />
                </div>
            </div>
        )
    }
}

export default GrandIncomeCard;
