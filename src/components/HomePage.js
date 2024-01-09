
import { useForm } from 'react-hook-form';
import apiMessager from '../conexion/messagerAxios';
import './HomePageStyle.css';
import OnLineUser from './OnLineUser';
import assigneData from './data';
import { useEffect, useState } from 'react';
import Message from './Message';
import YourComponent from './readImg';

function HomePage(){
    var dt = assigneData([]);
    const[users, setUsers] = useState([]);
    const[msg, setMsg] = useState([]);
    const[msgs, setMsgs] = useState([]);
    const [valeurDuChamp, setValeurDuChamp] = useState('');
    
    const getUsers=()=>{
        apiMessager.get('all_user_from_chat/'+1)
        .then(
            rep=>{
                console.log(rep.data);
                setUsers(rep.data);
            }
        )
    }

    const sentMessageService=(data)=>{
        //console.log(msgs);
        
        apiMessager.post('sent_message', data)
        .then(
            rep=>{
                if(msg.length===0)setMsg(rep.data);
            }
        )
    }

    useEffect(
        ()=>{
            const getChatMassages  = ()=>{
                    apiMessager.get('all_message_from_chat/'+1)
                    .then(
                        rep=>{
                            
                            setMsgs(rep.data)
                            //console.log(rep.data)
                        }
                    )
            };

            getChatMassages();

            const intervalId = setInterval(() => {
                getUsers();
                getChatMassages();
            }, 500);

            return ()=>clearInterval(intervalId);
        }, []
    );

     

    const {register, handleSubmit} = useForm()
    return(
        <div class="bd">
            <div class="history_sec">
            <h2>Chatty</h2>
                <div class="history_header">
                    <span>Chat history</span>
                    <div class="add_chat_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <g filter="url(#filter0_d_2_178)">
                                <circle cx="25" cy="21" r="21" fill="#D9D9D9"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_2_178" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_178"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_178" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="hist_content">

                </div>
            </div>
            <div class="chat_sec">
                <div class="chat_sec_header">
                    <h2>Chatty</h2>
                    <div class="profiel_">
                        <YourComponent data={{'prof_pic':1, 'id':dt['id'], 'ind':1}}>

                        </YourComponent>
                        <span>
                            {dt["fullName"]}
                        </span>
                    </div>
                </div>
                <div class="chat_body">
                    <div class="user_list_ech">
                        {
                            users.map(p=>
                                <OnLineUser datas = {{"name":p["fullName"], 'id':p['id']}}></OnLineUser>
                            )
                        }
                    </div>
                    <div class="msg_space main">
                        {
                            msgs.map(x=>{
                                var elementName = "anan";
                                users.forEach(i=>{
                                    if(i['id'] === x["userSenderId"])elementName = i['fullName']
                                })
                            return <Message infos={{"user" : x['userSenderId'] === dt['id'] ? 0 : 1 , "msg_content":x['messageContent'], "fullName":elementName, "id":x['userSenderId']}}></Message>
                            })
                        }
                    </div>
                    <form onSubmit={handleSubmit(sentMessageService)}>
                        <div class="msg_input">
                            <input type='hidden' value={dt['id']} {...register("userSenderId")}/>
                            <input type='hidden' value={-1} {...register("userReceiverId")}/>
                            <input type='hidden' value={1} {...register("chatId")}/>
                            <input  onChange={(e)=>setValeurDuChamp(e.target.value)} value={valeurDuChamp} {...register("messageContent")} type='text' placeholder='Type your message here'/>
                            <div class="">
                                <button type='submit' class="sent_msg_btn" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g clip-path="url(#clip0_10_36)">
                                            <path d="M2.68008 28L30.6667 16L2.68008 4L2.66675 13.3333L22.6667 16L2.66675 18.6667L2.68008 28Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10_36">
                                            <rect width="32" height="32" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default HomePage;