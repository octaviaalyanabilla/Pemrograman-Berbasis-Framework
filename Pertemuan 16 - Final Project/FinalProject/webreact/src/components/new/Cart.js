import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import { addDoc, collection, doc, getFirestore, onSnapshot, query, QuerySnapshot, setDoc } from "firebase/firestore";
import {firebaseConfig} from "../../config/firebase";
import { useHistory } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
export default function Cart() {
    const history = useHistory();
    const firebaseApp = firebase.initializeApp(firebaseConfig); // inisialisasi konfigurasi database firebase
    const db = getFirestore(firebaseApp);// inisialisasi konfigurasi database firebase
    const [cart,setCart] = useState([]);
    const getCarts = async () => {
        try {
            const q = query(collection(db, "carts"));
            await onSnapshot(q, (querySnapshot) => {
                setCart([])
                const data = []
                querySnapshot.forEach((doc) => {
                    data.push({
                        id: doc.id,
                        data: doc.data()  
                    })
                })
setCart(data)

            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getCarts()
    }, [])
    console.log(cart)
  return (
    <div className='container'>
            <Row>
                {cart.map((item) => {
                    return <Col key={item.id} md={12}>
                        <Card>
                            <Card.Body>
                                <img src={item.data.gambar} width="100px"/>
                                <h1 className='text-dark fw-bold mt-2'>{item.data.nama}</h1>
                                <p className='text-dark'>{item.data.deskripsi}</p>
                                <p className='text-dark'>Rp {item.data.harga}</p>
                            </Card.Body>
                        </Card>
                </Col>
                })}
            </Row>
    </div>
  )
}
