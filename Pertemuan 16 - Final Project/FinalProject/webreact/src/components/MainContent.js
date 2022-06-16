import React, { useEffect, useState } from 'react'
import product_card from "../data/product_data";
// import '../App.css'
// import '../App.scss'
import firebase from 'firebase/compat/app'
import { API_URL } from '../utils/constants';
import { Card, Button, Row } from 'react-bootstrap';
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import {firebaseConfig} from "../config/firebase";
import { useHistory } from 'react-router-dom';


const MainContent = () => {
  const history = useHistory();
  const firebaseApp = firebase.initializeApp(firebaseConfig); // inisialisasi konfigurasi database firebase
  const db = getFirestore(firebaseApp);
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})

    const getDataProducts = () => {
        fetch(API_URL + 'products')
          .then(response => response.json())
          .then(product => setProducts(product))
      }
      const getDataCategories = () => {
        fetch(API_URL + 'categories')
          .then(response => response.json())
          .then(category => setCategories(category))
      }

      const addCart = async (data)  => {
        try {
          await addDoc(collection(db, "carts"), data);
          // this.ambilDataDariServerAPI();
          history.push('/cart')
          history.go(0)
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        getDataProducts()
        getDataCategories()       
      }, [])


   return(
    <Row md={4} xs={6} className="mb-4">
            {
        products.map((product) => {
            return (
                <Card>
                <Card.Img variant="top" src={product.gambar} />
                <Card.Body className='card-body'>
                  <Card.Title>{product.nama}</Card.Title>
                  <Card.Text  className="card-text">
                    {product.deskripsi}
                  </Card.Text>
                  <Card.Text  className="card-text">
                      <strong>
                          {product.harga}
                      </strong>
                  </Card.Text>
                  <Button variant="primary" onClick={()=> addCart(product)}>Cart</Button>
                </Card.Body>
              </Card>    
            )
    })
        }
    </Row>
        
   )
    // return(
    //     <div className="main_content">
    //         <h3>Headphones</h3>
    //         {listItems}
    //     </div>
    // )
}
export default MainContent;