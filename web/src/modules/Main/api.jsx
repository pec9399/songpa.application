import axios from 'axios';
import { SERVER } from '../../constants';

export async function getAppsApi() {
    try {
        const apps = await axios.get(`${SERVER}/applications`,
            { withCredentials: true });
        return {
            result: true,
            data: apps.data
        }
    } catch (err) {
        console.log(err);
        return {
            result: false,
            message: err
        };
    }
}