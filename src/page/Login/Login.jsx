import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import Logo from "./component/Logo";
import ROKA from "./component/ROKA";

export default function Login(){
    const navigate = useNavigate();
    const [render, setRender] = useState(false);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACK_API + "/api/session/checkSession", { withCredentials: true })
        .then((response) => {
            console.log(response.data);
            if(response.data.user_id !== null && response.data.user_id !== '' && response.data.user_id !== undefined){
                navigate("/main")
            }
            else{setRender(true)}
        })
    },[])

    return render && <div className="container vh-100 d-flex flex-column justify-content-between align-items-center bg-light bg-gradient">
        <div></div>
        <div><Logo /></div>
        <LoginForm />
        <div></div>
        <div className="mb-5"><ROKA /></div>
    </div>
     
    ;
}