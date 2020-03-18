import React, { Component } from "react";
import IncomeCard from './IncomeCard';
import './IncomeCard.css';
import { Accordion, Icon } from 'semantic-ui-react'


class GrandIncomeCard extends Component {

    state = { activeIndex: 0 }
    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state
        return (

            <div>
                <div id="accordion-basic">
                    <Accordion fluid styled>
                        <Accordion.Title
                            className="Income-Cardd"
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <IncomeCard />
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>
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
