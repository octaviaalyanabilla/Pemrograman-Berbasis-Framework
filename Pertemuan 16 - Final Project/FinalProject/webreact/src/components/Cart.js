import React, { Component } from "react";
import Post from "./Post";
import firebase from 'firebase/compat/app'
import {firebaseConfig} from "../config/firebase";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Cart extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig); // inisialisasi konfigurasi database firebase

    this.state = {
      // komponen state dari React untuk statefull component
      listCart: [], // variabel array yang digunakan untuk menyimpan data API
    };
  }

  ambilDataDariSeverAPI = () => {
    // fungsi untuk mengambil data API dari Realtime Database Firebase
    // let ref = firebase.database().ref("/");
    // ref.on("value", (snapshot) => {
    //   const state = snapshot.val();
    //   this.setState(state);
    // });
  };

  simpanDataKeServerAPI = () => {
    // fungsi untuk mengirim/insert data API dari Realtime Database Firebase
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    // komponen untuk mengecek ketika component telah dimounting, maka panggil API
    // this.ambilDataDariSeverAPI(); // ambil data dari server API lokal
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState !== this.state) {
    //   this.simpanDataKeServerAPI();
    // }
  }

  render() {
  return(
    <div className="container">
    <h2 className="mt-2 fw-bolder">Daftar Artikel</h2>
    {this.state.listCart.map((artikel) => {
      // looping dan masukkan untuk setiap data yang ada di listCart ke variabel artikel
      return (
        <Post
          key={artikel.uid}
          judul={artikel.title}
          isi={artikel.body}
          idArtikel={artikel.uid}
          hapusArtikel={this.handleHapusArtikel}
        />
      );
    })}
    </div>

  )
  }
}

export default Cart;