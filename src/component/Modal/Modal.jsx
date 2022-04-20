import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxAction } from '../../redux/redux-action';
import sx from './Modal.module.css'

export default function Modal() {

    const modalShow = useSelector((s) => s.modalShow);
    const dispatch = useDispatch();
    const [opacity, setOpacity] = useState(0);

    const modalConfirmBtn = useRef()
    useEffect(() => {
        setOpacity(1);
        //document.getElementById("modal-confirm-btn").focus();
        modalConfirmBtn.current.focus();
        return () => { 

            setOpacity(0)
        }
    }, [])

    return (
        <div className={sx.wrapper}
            style={
                {
                    opacity: opacity
                }
            }
            onClick={() => {
                dispatch(reduxAction.MODAL_SHOW({ show: false, }))
            }}
            onKeyDown={(e) => { console.log(e) }}
        >
            <div className={`card ${sx.modalMsg}`} onClick={(e) => e.stopPropagation()}>
                <div className="card-body justify-content-between d-flex flex-column align-items-center">
                    <div></div>
                    <div className={sx.modalMsgContent}>{modalShow.msg}</div>
                    <div><button type="button" ref={modalConfirmBtn} className="btn btn-warning"
                        onClick={() => {
                            dispatch(reduxAction.MODAL_SHOW({ show: false, }));
                        }}>확인</button></div>
                </div>
            </div>
        </div>
    );
}