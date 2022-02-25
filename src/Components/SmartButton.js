import React, { useContext } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import OutputContext from '../Contexts/OutputContext.js'

const SmartButton = () => {
    const { setOutputText } = useContext(OutputContext);

    const fetchApiDataButton = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setOutputText(JSON.stringify(data));
    }

    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">

            <Button variant="contained" onClick={() => {
                fetchApiDataButton();
            }}>Click here!</Button>
            <Button variant="contained" onClick={() => {
                setOutputText(null);
            }}>Clear</Button>
        </ButtonGroup>
    );
}

export default SmartButton