import React, { Component } from "react";
import "./BlogPost.css";
import Post from "./Post";
// import API from "../../services";
import firebase from "firebase";
import firebaseConfig from "../../firebase/config";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Cart2 extends Component {
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
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
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

  handleHapusArtikel = (idArtikel) => {
    // // fungsi yang meng-handle button action hapus data
    // const { listCart } = this.state;
    // const newState = listCart.filter((data) => {
    //   return data.uid !== idArtikel;
    // });
    // this.setState({ listCart: newState });
  };

  handleTombolSimpan = (event) => {
    // // fungsi untuk meng-handle saat button action diklik (simpan data)
    // let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, number, dll)
    // let body = this.refs.isiArtikel.value;
    // let uid = this.refs.uid.value;

    // if (uid && title && body) {
    //   // cek apakah semua data memiliki nilai (tidak null)
    //   const { listCart } = this.state;
    //   const indeksArtikel = listCart.findIndex((data) => {
    //     return data.uid === uid;
    //   });
    //   listCart[indeksArtikel].title = title;
    //   listCart[indeksArtikel].body = body;
    //   this.setState({ listCart });
    // } else if (title && body) {
    //   // jika data belum di server
    //   const uid = new Date().getTime().toString();
    //   const { listCart } = this.state;
    //   listCart.push({ uid, title, body });
    //   this.setState({ listCart });
    // }

    // this.refs.judulArtikel.value = "";
    // this.refs.isiArtikel.value = "";
    // this.refs.uid.value = "";
  };

  render() {
     <div>aas</div>
  }
}

export default Cart2;