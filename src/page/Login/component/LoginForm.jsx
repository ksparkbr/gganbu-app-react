import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../component/Modal/Modal';
import { reduxAction } from '../../../redux/redux-action';
import sx from '../Login.module.css'

export default function LoginForm() {

    const input_userId = useRef();
    const [loginInfo, setLoginInfo] = useState({
        user_id : '',
        password : '',
    })
    const navigate = useNavigate()
    useEffect(()=>{
        input_userId.current.focus();
    },[])

    /* useEffect(()=>{console.log(loginInfo)},[loginInfo]) */
    const dispatch = useDispatch();

    const loginHndlr = () =>{
        axios.post(process.env.REACT_APP_BACK_API + "/api/session/setSession", loginInfo, {withCredentials: true})
            .then((result)=>{
                if(result.data.msg !== undefined){
                    dispatch(reduxAction.MODAL_SHOW({show: true, msg: result.data.msg}))
                }
                else navigate("/")
        })
    }

    const modalShow = useSelector((s)=>s.modalShow);

    return (
        <> 
            {modalShow.show && <Modal />}
            <div className="card">
                <div className="card-header bg-primary bg-gradient text-white text-center">
                    <div>
                        <b>회원 로그인</b>
                    </div>
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="fas fa-user" />
                        </span>
                        <input type="text"
                            className="form-control"
                            ref={input_userId} 
                            onChange={(e)=>{
                                setLoginInfo({
                                    ...loginInfo,
                                    user_id : e.target.value,
                                })
                            }}
                            onKeyDown={(e)=>{
                                if(e.key === "Enter") loginHndlr();
                            }} 
                            placeholder="사용자 아이디"
                            />
                    </div>

                    <div className="input-group mt-2">
                        <span className="input-group-text">
                            <i className="fas fa-key" />
                        </span>
                        <input type="password"
                            className="form-control" 
                            onChange={(e)=>{
                                setLoginInfo({
                                    ...loginInfo,
                                    password : e.target.value,
                                })
                            }} 
                            onKeyDown={(e)=>{
                                if(e.key === "Enter") loginHndlr();
                            }} 
                            placeholder="비밀번호"
                            />
                    </div>

                    <div className="mt-2">
                        <button className={`btn btn-primary ${sx.LoginBtn}`}
                            onClick={()=>loginHndlr()}>
                            <b>로그인</b>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}