import React from "react";
import InputRange from 'react-input-range';
import {Caption} from '../';

import {
    Container,
    SearchIcon,
    SearchInput,
    SermonList
} from "./styles";


export const Filter = ({ podcasts, onFilterChange }) => {

    const [input, setInput] = React.useState("");
    const [range, setRange] = React.useState({
        value: { min: 2012, max: 2018 },
    });

    const onInputChange = (value) => { 
        setInput(value);
        onFilterChange({
            min: range.value.min,
            max: range.value.max,
            search: input
        });
    }

    const onRangeChange = (value) => {
        setRange(value);
        onFilterChange({
            min: range.value.min,
            max: range.value.max,
            search: input
        });
    }

    return (
        <Container>

            <Caption>Filters</Caption>

            <SearchIcon />
            <SearchInput value={input}
                onChange={e => onInputChange(e.target.value)}
                type="text" placeholder="Search by speaker, title or topic" />

            <InputRange style={{ 'marginBottom': '80px' }}
                maxValue={2020}
                minValue={2010}
                value={range.value}
                onChange={value => onRangeChange({ value })} />
            
            <Caption style={{ 'marginTop': '80px', 'marginBottom': '15px' }}>Sermon Series</Caption>

            <SermonList>
                {podcasts.map(({ title, description, image }, index) => (
                    <div key={index}>{title}</div>
                ))}
            </SermonList>
            
        </Container>
    );
};
