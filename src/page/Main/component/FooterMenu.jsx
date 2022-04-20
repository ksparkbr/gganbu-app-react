import sx from '../Main.module.css'
import { footerMenuData } from './FooterMenuData';
export default function FooterMenu() {

    return (
        <div className={sx.footerMenu}>
            <div className="btn-group w-100" role="group">
                {footerMenuData.length > 0 && footerMenuData.map((item, idx) => {
                    return <button type="button" className={`btn btn-primary ${sx.footerBtn}`}>
                        <div>
                            {item.icon}
                        </div>
                        <div className={sx.footerBtnText}>
                            {item.text}
                        </div>
                    </button>
                })}
            </div>
        </div>
    );
}