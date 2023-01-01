import axios from 'axios';
import { SERVER } from '../../constants';

export async function getAppsApi() {
    try {
        const apps = await axios.get(`${SERVER}/applications?page=1`,
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