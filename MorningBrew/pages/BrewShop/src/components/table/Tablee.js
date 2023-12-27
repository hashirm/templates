import React from 'react';
import { useEffect, useState } from 'react';
import './table.css'
import { Table } from 'react-bootstrap';
import { crud } from '../../firebase/config'


const Tablee = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        crud.collection('user-data').onSnapshot((snapshot) => {

            setData(snapshot.docs)



        }

        )
     
        

    }, [])
    const handleClick = (id) => {
        crud.collection('user-data').doc(id).delete()
    }

    const handleUpdateClick = (id) => {
      const updateData = crud.collection('user-data').doc(id);
        console.log(updateData);
    }

    data.forEach((doc) => { console.log(doc.data().email + '   ' + doc.data().name) })
    return (
        <div className='table'>
            <div className=''>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skills</th>
                            <th>Emails</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data && data.map((doc) => (
                                <tr key={doc.id}>
                                    <td>{doc.data().email}</td>
                                    <td>{doc.data().name}</td>
                                    <td>{doc.data().skills}</td>
                                    <td><img onClick={() => handleClick(doc.id)} style={{ width: '20px', cursor:'pointer' }} src="./delete.svg" alt="delete-icon" /><img style={{ width: '20px', cursor:'pointer' }} onClick = {() => handleUpdateClick(doc.id)} src="./update.svg" alt="update-icon" /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>

            </div>
        </div>
    );
}

export default Tablee;
