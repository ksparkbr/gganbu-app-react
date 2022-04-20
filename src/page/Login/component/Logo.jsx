export default function Logo({width=180, height=80, mode='light'}){
    
    return (
    <div>
        {mode === 'dark' && <img src="/asset/image/gganbu-logo-dark.png" style={{ width: width, height: height}} />}
        {mode === 'light' && <img src="/asset/image/gganbu-logo.png" style={{ width: width, height: height}} />}
    </div>
    );
}