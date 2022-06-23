import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Body from './Components/BodyComponent/Body';
import Footer from './Components/FooterComponent/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Server from 'axios';
import { DispatchUserLogin, FetchUser, DispatchGetUser } from './Redux/Actions/AuthenticationAction';

function App() {

  const dispatch = useDispatch();
  const token = useSelector(State => State.token);
  const userAuthentication = useSelector(State => State.userAuthentication);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      const getToken = () => {
        Server.post("/user/refresh_token", null).then(Response => {
          dispatch({ type: "GET_TOKEN", payload: Response.data.Access_Token })

        }).catch(Error => {
          console.log(Error);
        });
      };

      getToken();
    };

  }, [userAuthentication.isLoggedIn, dispatch]);

  useEffect(() => {

    if (token) {
      const getUser = () => {
        dispatch(DispatchUserLogin());

        return FetchUser(token).then(Response => {
          dispatch(DispatchGetUser(Response));
        });
      };

      getUser();
    };

  }, [token, dispatch]);

  return (
    <Router>

      <div className="App">

        <Header />
        <Body />
        <Footer />

      </div >

    </Router>
  );

};

export default App;
