import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import firebase from '../util/firebase';
import AddBox from '@material-ui/icons/AddBox';
import { forwardRef } from 'react';

const TableUI = () => {
    // const ABC = [{"Id":1,"Name":"Yahya","Pseudo":"Hyrkul"},{"Id":2,"Name":"Yahya1","Pseudo":"Hyrkul1"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},]
    const [users, setUsers] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),}
    useEffect(() => {
        firebase.firestore()
            .collection("Test")
            .onSnapshot((Users) => {
                setUsers(Users.docs)
            })
    }, [])
    const COLUMNS = [// Etape 2 - Creer less colonnes correspond a Json
        {
            title: 'ID',
            field: "Id"
        },
        {
            title: 'Name',
            field: "Name"
        },
        {
            title: 'Pseudo',
            field: "Pseudo"
        }]

        const AA=()=> {
            console.log("Test - event");
        }
    return (
        <div>
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
                    icon: ()=> "AccessAlarm",
                    tooltip: 'Save User',
                    onClick: (event, rowData) =>  AA(),
                },
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) =>  AA(),
                }
            ]}
            />
        </div>
    )
}

export default TableUI
