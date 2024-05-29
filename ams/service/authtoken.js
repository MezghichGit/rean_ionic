import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import { jwtDecode } from "jwt-decode";


function authentificate(newUser) {
    return axios
        .post('https://ams.smart-it-partner.com/api/login_check', newUser)
        .then(response => response.data.token)
        .then(token => {
            asyncStorage.setItem('token', token);
            setaxiostoken(token);

        });
}
const getToken = async () => {
    try {
        const token = await asyncStorage.getItem("token");
        if (token) {
            const jwtdata = jwtDecode(token);
            console.log(jwtdata.exp * 1000, new Date().getTime());
            if (jwtdata.exp * 1000 > new Date().getTime()) {
                setaxiostoken(token);
            }
            else {
                logout();
            }
        }
        else {
            logout();
        }
    } catch (error) {
        console.log(error);
    }
};

function logout() {
    asyncStorage.removeItem('token')
    delete axios.defaults.headers['Authorization'];
}


function setaxiostoken(token) {
    axios.defaults.headers['Authorization'] = 'Bearer ' + token
}
export default {
    authentificate, logout, getToken
};
