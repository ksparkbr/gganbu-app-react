import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reduxAction } from '../../../redux/redux-action';
import Logo from '../../Login/component/Logo';
import sx from '../Main.module.css'
export default function Header(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHndlr = () =>{
        axios.get(process.env.REACT_APP_BACK_API + "/api/session/invalidateSession", {withCredentials: true})
            .then((res)=>{
                dispatch(reduxAction.SET_SESSION({user_id: ''}))
                navigate("/login")
            })
    }

    return (
    <div className={sx.header}>
        <div className="d-flex justify-content-between align-items-center bg-dark text-white bg-gradient" style={{height: "65px"}}>
            <div style={{padding: "1rem"}}><Logo width={100} height={45} mode={'dark'} /></div>
            <div><h5>군 관사정보</h5></div>
            
            <div className={`${sx.logoutBtn} btn btn-danger text-white m-1 me-3 bg-gradient ms-5`}
                onClick={()=>logoutHndlr()}>
                <i className="fas fa-power-off" />
            </div>
        </div>
    </div>
    );
}