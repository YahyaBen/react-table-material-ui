import React, { useState, useEffect, useMemo } from 'react'
import firebase from '../util/firebase';
import { useTable } from 'react-table'


const Table = () => {
    const [users, setUsers] = useState([])
    const COLUMNS = [// Etape 2 - Creer less colonnes correspond a Json
        {
            Header: 'ID',
            accessor: "Id"
        },
        {
            Header: 'Name',
            accessor: "Name"
        },
        {
            Header: 'Pseudo',
            accessor: "Pseudo"
        },
    ]
    const ABC = [{"Id":1,"Name":"Yahya","Pseudo":"Hyrkul"},{"Id":2,"Name":"Yahya1","Pseudo":"Hyrkul1"},{"Id":2,"Name":"Yahya2","Pseudo":"Hyrkul2"},]
    const C = useMemo(() => COLUMNS, [])
    const U = useMemo(() => ABC, [])
    const Tableau = useTable({ // Etape 3 - creer table d'instance
        columns: C,
        data: U,
    })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = Tableau


    // useEffect(() => {
    //     firebase.firestore()
    //         .collection("Test")
    //         .onSnapshot((Users) => {
    //             setUsers(Users.docs.map(user => user.data()))
    //         })
    // }, [])
    // Etape 4 , creer notre tableau 

    return (
        <Table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                    </tr>
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })} 
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Table
