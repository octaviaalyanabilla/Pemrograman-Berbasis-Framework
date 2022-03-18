import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Test from './Test';
//import HelloComponent from './Component/HelloComponent';
//import Login from './LOGIN/Login';
import BlogPost from "./container/BlogPost";
import BlogPostMahasiswa from './container/BlogPostMahasiswa';

ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));
//class StateFullComponent extends React.Component{
  //render(){
    //return<p>StateFullComponent</p>
  //}
//}
//ReactDOM.render(
  //  <Login />,
  //document.getElementById('root')
//);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
