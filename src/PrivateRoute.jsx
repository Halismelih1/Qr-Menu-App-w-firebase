import { useEffect } from "react";
import React from "react";
import { onAuthStateChanged } from 'firebase/auth';  
import { useNavigate } from "react-router-dom";
import { auth } from './firebaseConfig';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PrivateRoute({ element }) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  console.log("PrivateRoute - Current User:", user);

  return user ? element : navigate('/login');
  <ToastContainer/>
}

export default PrivateRoute;
