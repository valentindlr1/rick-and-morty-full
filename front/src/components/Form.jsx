import { useState, useEffect } from "react";
import validate from "../utils/validate";
import './Form.modules.css';


export default function Form(props){
    const [userData, setUserData] = useState({
        user: "",
        pass: "",
    });
    const [errors, setErrors] = useState({});

    const {login} = props;

    function handleChange (event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };
    function handleSubmit(event){
        event.preventDefault();
        login(userData)    
    }

    useEffect(()=>{
        setErrors(validate(userData))
    }, [userData])


        return <form onSubmit={handleSubmit}>
            <div className="form">
                <h2 className="h2">INGRESAR</h2>
                <label className='labels'>Usuario: </label>
                <input placeholder="Escribe tu usuario..." type="text" value={userData.user} onChange={handleChange} name="user" className={(errors?.user && "warning") || "text"}/>
                <p className="danger">{errors?.user}</p>
                <label className="labels">Contraseña: </label>
                <input placeholder="Escribe tu contraseña..." type="password" value={userData.pass} onChange={handleChange} name="pass" className={(errors?.pass && "warning") || "text"}/>
                <p className="danger">{errors?.pass}</p>
                <button type="submit" className="sub">LOGIN</button>
            </div>
        
    </form>
}

