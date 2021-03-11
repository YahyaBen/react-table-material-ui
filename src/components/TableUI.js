import React,{useEffect,useState} from 'react'
import MaterialTable from 'material-table'
import firebase from '../util/firebase';

const TableUI = () => {
    const ABC = [{"Id":1,"Name":"Yahya","Pseudo":"Hyrkul"},{"Id":2,"Name":"Yahya1","Pseudo":"Hyrkul1"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},]
        const [users,setUsers] = useState([])
        console.log(users);
    useEffect(() => {
        firebase.firestore()
            .collection("Test")
            .onSnapshot((Users) => {
                Array(setUsers(Users.docs))
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
    return (
        <div>
            <MaterialTable title="Test" 
            data={users.map(u=> u.data())}
            columns={COLUMNS }            
            />
        </div>
    )
}

export default TableUI
