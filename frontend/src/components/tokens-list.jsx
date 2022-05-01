import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BasicModal from "./modal";

const columns = [
    { field: 'propName', headerName: 'Property', width: 130 },
    { field: 'tokens', headerName: 'Tokens', width: 130 },
    {
        field: 'details',
        headerName: 'Details',
        width: 150,
        renderCell: () => (
            <strong>
                <BasicModal/>
            </strong>
        ),
    },
];

const rows = [
    { id: 1, tokens: 'Snow', propName: 'Jon' },
    { id: 2, tokens: 'Lannister', propName: 'Cersei' },
    { id: 3, tokens: 'Lannister', propName: 'Jaime' },
    { id: 4, tokens: 'Stark', propName: 'Arya' },
    { id: 5, tokens: 'Targaryen', propName: 'Daenerys' },
];

export default function RenderCellGrid() {
    return (
        <div style={{ height: 650, width: '25%', margin: 20 }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
