import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import firebase from '../util/firebase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const TableUI = () => {

    const [users, setUsers] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);
    ///// Dialog Alert Confirmation 
    ///////////////////////////////
    const [openA, setOpenA] = useState(false);
    const isOpenA = () => {
        setOpenA(true);
    };

    const isCloseA = () => {
        setOpenA(false);
    };

    ////////////////////////////////////
    const [openB, setOpenB] = useState(false);
    const isOpenB = () => {
        setOpenB(true);
    };

    const isCloseB = () => {
        setOpenB(false);
    };
    const COLUMNS = [// Etape 2 - Creer less colonnes correspond a Json
        {
            title: 'Pseudo',
            field: 'Pseudo'
        },
        {
            title: 'EnPause',
            field: 'isPause'
        },]
    const Add = () => {
        firebase
            .firestore()
            .collection('Test')
            .add(
                Users
            )
        isCloseA()
    }
    const Modifier = () => {
        firebase
            .firestore()
            .collection('Test')
            .doc('1lyRYUtY6ZhEtx4ab8Hn').update({isPause : true})
        isCloseB()
    }
    const Users =
    {
        Id: 3,
        Name: Math.random().toString(36).substring(4),
        Pseudo: Math.random().toString(36).substring(4),
        isPause: false
    }


    useEffect(() => {
        firebase.firestore()
            .collection("Test")
            .onSnapshot((Users) => {
                setUsers(Users.docs)
            })
    }, [])

    return (
        <div >
            <MaterialTable
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
                    icon: "how_to_reg",
                    tooltip: 'Save User',
                    onClick: (event, rowData) => isOpenB()
                },
                {
                    icon: 'add',
                    tooltip: 'Add User',
                    isFreeAction: true,
                    onClick: (event) => isOpenA()
                }
                ]}
            />

            {/* ////Dialog Add */}
            <Dialog
                open={openA}
                onClose={isCloseA}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Ajouter"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Voulez-vous ajouter un vouveau utilisateur ?
                      </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={isCloseA} color="primary">
                        Refuser
                      </Button>
                    <Button onClick={Add} color="primary" autoFocus>
                        Accepter
                      </Button>
                </DialogActions>
            </Dialog>
            {/* ////Dialog Pause */}
            <Dialog
                open={openB}
                onClose={isCloseB}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"La pause"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Voulez-vous activer la pause de cette utilisateur ?
                      </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={isCloseB} color="primary">
                        Refuser
                      </Button>
                    <Button onClick={Modifier} color="primary" autoFocus>
                        Accepter
                      </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TableUI
