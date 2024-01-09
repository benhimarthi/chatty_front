import './HomePageStyle.css';
import YourComponent from './readImg';

function OnLineUser(data){
    return(
        <div class="user_stat">
                            <div class="user_item">
                            <YourComponent data={{'prof_pic':1, 'id':data.datas['id'], 'ind':1}}>
                            </YourComponent>
                                <span>
                                   {data.datas['name']}
                                </span>
                                
                            </div>
                            <div class="on_line_indc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#05FF00"/>
                            </svg>
                            </div>
        </div>
    );
}

export default OnLineUser;