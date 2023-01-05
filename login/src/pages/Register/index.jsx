import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LayoutComponents>
            <form className="login-form">
          <span className="login-form-title">Cadastre-se</span>
          <div className="wrap-input">
            <input  
            value={name} 
            onChange={e => setName(e.target.value)} 
            className={name !== "" ? 'has-val input' : 'input'}
            type="text"/>
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>
          <div className="wrap-input">
            <input  
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className={email !== "" ? 'has-val input' : 'input'}
            type="email"/>
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className={password !== "" ? 'has-val input' : 'input'} 
            type="password"/>
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>
          <div className="container-login-form-btn">
            <button className="login-form-btn">Criar conta</button>
          </div>
        </form>
        </LayoutComponents>
    )
} 