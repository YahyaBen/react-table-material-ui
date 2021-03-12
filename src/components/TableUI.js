import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import firebase from '../util/firebase';

const TableUI = () => {
    // const ABC = [{"Id":1,"Name":"Yahya","Pseudo":"Hyrkul"},{"Id":2,"Name":"Yahya1","Pseudo":"Hyrkul1"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},]
    const [users, setUsers] = useState([])
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

        const event=()=> {
            console.log("Test - event");
        }
    return (
        <div>
            <MaterialTable
                title="Test"
                data={users.map(u => u.data())}
                columns={COLUMNS}
                options={{
                    rowStyle: {
                        backgroundColor: '#EEE',
                    },
                    actionsColumnIndex: -1
                }}
                actions={[{
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) =>  console.log( firebase.firestore.Timestamp.fromMillis)
                }]}
            />
        </div>
    )
}

export default TableUI
