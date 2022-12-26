import axios from 'axios';
import { SERVER } from '../../constants';

export async function addCardApi(data) {
    try {
     
        console.log(data);

        let frm = new FormData();
        frm.append("title", data.title);
        frm.append("description", data.description);
        frm.append("maxNum", data.maxNum);
        frm.append("startTime", data.startTime);
        frm.append("openTime", data.openTime);
        frm.append("file-front", data.file[0]);
        
        const apps = await axios.post(`${SERVER}/applications`,frm,
            { 
              withCredentials: true, 
              headers: {
                'Content-Type': 'multipart/form-data'
              } 
            });
        return {
            result: true
        }
    } catch (err) {
        console.log(err);
        return {
            result: false,
            message: err
        };
    }
}