import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import firebase from '../util/firebase';
import AddBox from '@material-ui/icons/AddBox';
import { forwardRef } from 'react';

const TableUI = () => {
    // const ABC = [{"Id":1,"Name":"Yahya","Pseudo":"Hyrkul"},{"Id":2,"Name":"Yahya1","Pseudo":"Hyrkul1"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},]
    const [users, setUsers] = useState([])
    const Users =
    {
        Id: 3,
        Name: Math.random().toString(36).substring(4),
        Pseudo: Math.random().toString(36).substring(4)
    }
    const [selectedRow, setSelectedRow] = useState(null);
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    }
    useEffect(() => {
        firebase.firestore()
            .collection("Test")
            .onSnapshot((Users) => {
                setUsers(Users.docs)
            })
    }, [])
    const COLUMNS = [// Etape 2 - Creer less colonnes correspond a Json
        {
            title: 'Pseudo',
            field: "Pseudo"
        }]

    return (
        <div >
            <MaterialTable
                icons={tableIcons}
                title="Test"
                data={users.map(u => u.data())}
                columns={COLUMNS}
                onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                options={{
                    rowStyle: rowData => ({
                        backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                    }),
                    actionsColumnIndex: -1,

                }}
                actions={[{
                    icon:"how_to_reg",
                    tooltip: 'Save User',
                    onClick: (event, rowData) => console.log(),
                },
                {
                    icon: 'add',
                    tooltip: 'Add User',
                    isFreeAction: true,
                    onClick: (event) => firebase
                        .firestore()
                        .collection("Test")
                        .add(Users)
                }
                ]}
            />
        </div>
    )
}

export default TableUI
