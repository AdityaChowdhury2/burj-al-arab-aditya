import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:bedType" element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          } />
          <Route path="/profile/:email" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
