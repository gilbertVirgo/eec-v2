import React from "react";
import InputRange from 'react-input-range';

import {
    Container
} from "./styles";

export const Filter = ({ children }) => {

    const [range, setDuration] = React.useState({
        value: { min: 2, max: 10 },
    });


    return (
        <Container>
            <div>Filters</div> 
             
            <div class="search-container">
                <img src="" />
                <input className="input-search" type="text" placeholder="Search by speaker, title or topic" />
            </div>

            <InputRange
                maxValue={20}
                minValue={0}
                value={range.value}
                onChange={value => this.setState({ value })} />
        </Container>
    );
};
