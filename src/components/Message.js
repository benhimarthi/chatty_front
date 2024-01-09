import './HomePageStyle.css';
import YourComponent from './readImg';

function Message(data){
    return(
        <div class="msg_space">
            {
            data.infos['user'] === 1 ?
                        <div >
                            <span class="msg_res">{data.infos['fullName']}</span>
                            <div class="message_bx">
                                <YourComponent data={{'prof_pic':1, 'id':data.infos['id'], 'ind':1}}>
                                </YourComponent>
                                <div class="msg_content">
                                    <p>
                                    {data.infos['msg_content']}
                                    </p>
                                </div>
                            </div>
                        </div>
                        :
                        <div class="message_bx us">
                            <div class="msg_content_us">
                                <p>
                                {data.infos['msg_content']}
                                </p>
                            </div>
                            <YourComponent data={{'prof_pic':1, 'id':data.infos['id'], 'ind':1}}>
                            </YourComponent>
                        </div>
        }
        </div>
        
    );
}
export default Message;