import React from 'react'
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'id',
    text: 'Id'
}, {
    dataField: 'symbol',
    text: 'Symbol'
}, {
    dataField: 'price',
    text: 'Price'
}, {
    dataField: 'change_24h',
    text: 'Change_24h'
}, {
    dataField: 'volume_24h',
    text: 'Volume_24h'
}];



class Markets extends React.Component {
    constructor(props) {
        super(props);
        this.setFavourite = this.setFavourite.bind(this);
    }

    setFavourite(row){
        this.props.store.dispatch({ type: 'SETFAVOURITES', payload: row })
    }


    selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {
            console.log('=== selectRow row ===', row);
            console.log('=== selectRow event ===', e);
            this.setFavourite(row);
    //        this.props.store.dispatch({ type: 'SETFAVOURITES', payload: row })
        }
    };

    render() {
        return (
            <BootstrapTable
                keyField='id'
                data={this.props.markets}
                columns={columns}
                selectRow={selectRow}
            />
        )
    }
}
export default Markets