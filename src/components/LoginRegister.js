import './LoginRegisterStyle.css';
import { useForm } from 'react-hook-form';
import apiUser from '../conexion/loginRegisterAxios';
import { useNavigate } from 'react-router-dom';
import assigneData from './data';
import FileUpload from './FileUpdate';
import { useEffect } from 'react';
import YourComponent from './readImg';

function LoginRegister({setToken}){

    const history = useNavigate();

    const fromdata = new FormData();
    fromdata.append('id', 1);
    fromdata.append("ind", 1);

    
    

    const loginService = (data)=>{
        console.log(data)
        apiUser.post('/login', data)
        .then(
            rep=>{
                assigneData(rep.data);
                setUserStatus(rep.data);
                console.log(rep.data)
                history('/home')
            }
        )
    }

    const setUserStatus = (data)=>{
        
        apiUser.get('/updateStatus?id='+ String(data['id']) +"&status=1")
        .then(
            rep =>{
                console.log(rep.data)
            }
        )
    }

    const registerService=(data)=>{
        apiUser.post("/sign_up", data)
        .then(
            rep=>{
                assigneData(rep.data);
                //setUserStatus(rep.data);
                history('/home')
            }
        )
    }
    useEffect(()=>{
    }, [])

    const {register, handleSubmit} = useForm()
    //<FileUpload></FileUpload>
    return(
        <div class="bd">
            <h1>Chatty</h1>
            
            
            <div class="login_register_container">
                <div class="container">
                    <div class="title">
                        Login
                    </div>
                    <div class="subtitle">
                    Sign in using your username and password.
                    </div>
                    <form onSubmit={handleSubmit(loginService)}>
                        <div class="username_field field">
                            <div class="field_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_2_19)">
                                        <path d="M16 16C18.9467 16 21.3333 13.6133 21.3333 10.6667C21.3333 7.72 18.9467 5.33333 16 5.33333C13.0533 5.33333 10.6667 7.72 10.6667 10.6667C10.6667 13.6133 13.0533 16 16 16ZM16 18.6667C12.44 18.6667 5.33334 20.4533 5.33334 24V26.6667H26.6667V24C26.6667 20.4533 19.56 18.6667 16 18.6667Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_19">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text_field">
                                <input type='text' placeholder='User name' {...register("userName")}/>
                            </div>
                        </div>
                        <div class="password_field field">
                            <div class="field_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_2_22)">
                                        <path d="M24 10.6667H22.6667V8C22.6667 4.32 19.68 1.33333 16 1.33333C12.32 1.33333 9.33334 4.32 9.33334 8V10.6667H8.00001C6.53334 10.6667 5.33334 11.8667 5.33334 13.3333V26.6667C5.33334 28.1333 6.53334 29.3333 8.00001 29.3333H24C25.4667 29.3333 26.6667 28.1333 26.6667 26.6667V13.3333C26.6667 11.8667 25.4667 10.6667 24 10.6667ZM16 22.6667C14.5333 22.6667 13.3333 21.4667 13.3333 20C13.3333 18.5333 14.5333 17.3333 16 17.3333C17.4667 17.3333 18.6667 18.5333 18.6667 20C18.6667 21.4667 17.4667 22.6667 16 22.6667ZM20.1333 10.6667H11.8667V8C11.8667 5.72 13.72 3.86667 16 3.86667C18.28 3.86667 20.1333 5.72 20.1333 8V10.6667Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_22">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text_field">
                                <input {...register("password")} type='text' placeholder='Password'/>
                            </div>
                        </div>
                        <div class="password_md_mng">
                            <span>
                            forget your password?
                            </span>
                            <div>
                            <a href='#' title='changed password'>
                            changed it
                            </a>
                            </div>
                        </div>
                        <button type="submit">
                            <span>Login</span>
                        </button>
                    </form>
                </div>
                <div class="container">
                    <div class="title">
                        Register
                    </div>
                    <div class="subtitle">
                    Create a new account if you  do not have one.
                    </div>
                    <form onSubmit={handleSubmit(registerService)}>
                        <div class="username_field field">
                            <div class="field_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_2_19)">
                                        <path d="M16 16C18.9467 16 21.3333 13.6133 21.3333 10.6667C21.3333 7.72 18.9467 5.33333 16 5.33333C13.0533 5.33333 10.6667 7.72 10.6667 10.6667C10.6667 13.6133 13.0533 16 16 16ZM16 18.6667C12.44 18.6667 5.33334 20.4533 5.33334 24V26.6667H26.6667V24C26.6667 20.4533 19.56 18.6667 16 18.6667Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_19">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text_field">
                                <input type='text' placeholder='User name' {...register("userNameT")}/>
                            </div>
                        </div>
                        <div class="fullname_field field">
                            <div class="field_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_2_19)">
                                        <path d="M16 16C18.9467 16 21.3333 13.6133 21.3333 10.6667C21.3333 7.72 18.9467 5.33333 16 5.33333C13.0533 5.33333 10.6667 7.72 10.6667 10.6667C10.6667 13.6133 13.0533 16 16 16ZM16 18.6667C12.44 18.6667 5.33334 20.4533 5.33334 24V26.6667H26.6667V24C26.6667 20.4533 19.56 18.6667 16 18.6667Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_19">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text_field">
                                <input type='text' placeholder='Full name' {...register("fullNameT")}/>
                            </div>
                        </div>
                        <div class="password_field field">
                            <div class="field_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_2_22)">
                                        <path d="M24 10.6667H22.6667V8C22.6667 4.32 19.68 1.33333 16 1.33333C12.32 1.33333 9.33334 4.32 9.33334 8V10.6667H8.00001C6.53334 10.6667 5.33334 11.8667 5.33334 13.3333V26.6667C5.33334 28.1333 6.53334 29.3333 8.00001 29.3333H24C25.4667 29.3333 26.6667 28.1333 26.6667 26.6667V13.3333C26.6667 11.8667 25.4667 10.6667 24 10.6667ZM16 22.6667C14.5333 22.6667 13.3333 21.4667 13.3333 20C13.3333 18.5333 14.5333 17.3333 16 17.3333C17.4667 17.3333 18.6667 18.5333 18.6667 20C18.6667 21.4667 17.4667 22.6667 16 22.6667ZM20.1333 10.6667H11.8667V8C11.8667 5.72 13.72 3.86667 16 3.86667C18.28 3.86667 20.1333 5.72 20.1333 8V10.6667Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_22">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text_field">
                                <input type='text' placeholder='Password' {...register("passwordT")}/>
                            </div>
                        </div>
                        <div class="confirm_password_field field">
                            <div class="field_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_2_22)">
                                        <path d="M24 10.6667H22.6667V8C22.6667 4.32 19.68 1.33333 16 1.33333C12.32 1.33333 9.33334 4.32 9.33334 8V10.6667H8.00001C6.53334 10.6667 5.33334 11.8667 5.33334 13.3333V26.6667C5.33334 28.1333 6.53334 29.3333 8.00001 29.3333H24C25.4667 29.3333 26.6667 28.1333 26.6667 26.6667V13.3333C26.6667 11.8667 25.4667 10.6667 24 10.6667ZM16 22.6667C14.5333 22.6667 13.3333 21.4667 13.3333 20C13.3333 18.5333 14.5333 17.3333 16 17.3333C17.4667 17.3333 18.6667 18.5333 18.6667 20C18.6667 21.4667 17.4667 22.6667 16 22.6667ZM20.1333 10.6667H11.8667V8C11.8667 5.72 13.72 3.86667 16 3.86667C18.28 3.86667 20.1333 5.72 20.1333 8V10.6667Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_22">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="text_field">
                                <input type='text' placeholder='Confirm password'/>
                            </div>
                        </div>
                        
                        <button type='submit'>
                            <span>Register</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginRegister;