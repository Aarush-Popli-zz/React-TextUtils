import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: '#212529',
    //     backgroundColor: '#f8f9fa'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === '#f8f9fa'){
    //         setMyStyle({
    //             color: '#212529',
    //             backgroundColor: '#f8f9fa'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: '#f8f9fa',
    //             backgroundColor: '#212529'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (    
        <div className="container">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">About</h1>
                <p className="fs-4">TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. It reports number of words and characters, and time to read. This website works with any browser such as Chrome, Firefox, Safari, Edge and others. It is made using React JS.</p>
                <span>Created By: Aarush Popli </span>
                <a href="https://linkedin.com/in/aarushpopli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-linkedin mx-2" style={{fontSize: "25px"}}></i></a>
                <a href="https://github.com/Aarush-Popli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-github mx-2" style={{fontSize: "25px"}}></i></a>
            </div>
            {/* <button type='button' onClick={toggleStyle} className="btn btn-warning">{btnText}</button> */}
        </div>
    )
}
