import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'propName', headerName: 'Property', width: 130 },
    { field: 'tokens', headerName: 'Tokens', width: 130 },
];

const rows = [
    { id: 1, tokens: 'Snow', propName: 'Jon' },
    { id: 2, tokens: 'Lannister', propName: 'Cersei' },
    { id: 3, tokens: 'Lannister', propName: 'Jaime' },
    { id: 4, tokens: 'Stark', propName: 'Arya' },
    { id: 5, tokens: 'Targaryen', propName: 'Daenerys' },
];

export default function CompletedOrders() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
