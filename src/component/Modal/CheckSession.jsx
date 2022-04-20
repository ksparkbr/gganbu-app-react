import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reduxAction } from "../../redux/redux-action";

export default function CheckSession({ referer, ok }){
    
    const [render, setRender] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reduxSession = useSelector((s)=> s.session)

    const checkSession = () => {

        if(reduxSession.user_id === ''){
            setRender(false);
            console.log("로그아웃된거같은데");
            axios.get(process.env.REACT_APP_BACK_API + "/api/session/checkSession", { withCredentials: true })
            .then((response) => {
                if(response.data.user_id === null || response.data.user_id === '' || response.data.user_id === undefined){
                    console.log("권한없는 접근");
                    setRender(false);
                    if(referer !== '/') dispatch(reduxAction.MODAL_SHOW({show: true, msg: <span>권한없는 접근입니다.</span>}));
                    navigate("/login");
                }
                else{
                    console.log(response.data);
                    dispatch(reduxAction.SET_SESSION(response.data))
                    setRender(true);
                }
            })
        }
        else{
            setRender(true);
        }
    }

    useEffect(()=>{
        checkSession();
    },[])

    return (
        <>
            {render && ok}
        </>
    );
}