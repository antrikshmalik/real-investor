import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'propName', headerName: 'Property', width: 130 },
    { field: 'tokens', headerName: 'Tokens', width: 130 },
];

const rows = [
    { id: 1, tokens: 'Snow', propName: 'Jon' },
    { id: 2, tokens: 'Stark', propName: 'Arya' },
    { id: 3, tokens: 'Targaryen', propName: 'Daenerys' },
];

export default function OpenOrders() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
