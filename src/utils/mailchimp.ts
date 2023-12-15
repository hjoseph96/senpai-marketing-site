import axios from "axios";

const API_KEY = "8d6a6c75e442ef0ecc921328bb5ba163-us21";
const mcListId = "e941f9198b";

export class MailChimp {
    static async subscribe(email: string) {
        try {
            const postData = {
                email_address: email,
                status: "subscribed"
            };

            // Configure headers
            let axiosConfig = {
                headers: {
                    'Authorization': "Basic " + Buffer.from('username:' + API_KEY).toString('base64'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };

            let res = await axios.post('https://us21.api.mailchimp.com/3.0/lists/' + mcListId + '/members', postData, axiosConfig);
            console.log(res);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}