import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import OutputContext from '../Contexts/OutputContext.js'

const createData = (Id, Name, Email, City, Zip) => {
    return { Id, Name, Email, City, Zip };
}

const populateRows = (outputText) => {
    if (outputText == null) { return null }
    const Rows = outputText.map((person) => {
        return createData(person.id, person.name, person.email, person.address.city, person.address.zipcode)
    })

    return Rows;
}

const renderRows = (row) => {
    return (
        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {row.Id}
            </TableCell>
            <TableCell align="right">{row.Name}</TableCell>
            <TableCell align="right">{row.Email}</TableCell>
            <TableCell align="right">{row.City}</TableCell>
            <TableCell align="right">{row.Zip}</TableCell>
        </TableRow>
    )
}

const SmartList = () => {
    const { outputText } = useContext(OutputContext);

    let populatedRows = populateRows(JSON.parse(outputText));
    console.log(populatedRows)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">Zip</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {outputText && populatedRows.map((row) => (
                        renderRows(row)
                    ))}
                    {!outputText && [].map((row) => (
                        renderRows(row)
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SmartList