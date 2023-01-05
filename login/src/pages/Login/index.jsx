import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LayoutComponents } from '../../components/LayoutComponents';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (  
    <LayoutComponents>
        <form className="login-form">
          <span className="login-form-title">Login</span>
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
            <button className="login-form-btn">Entrar</button>
          </div>
          <div className="text-center">
            <span className="txt1">Não possui uma conta?</span>
            <Link className="txt2" to="/register">Cadastre-se</Link>
          </div>
        </form>
    </LayoutComponents>
    )
}