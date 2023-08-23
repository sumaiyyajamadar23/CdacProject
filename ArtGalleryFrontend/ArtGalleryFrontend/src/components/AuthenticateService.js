import react from 'react'
import { Component } from 'react'

class AuthenticateService extends Component
{
    artistLogin(username)
    {
        const type = "artist"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    customerLogin(username)
    {
        const type = "customer"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    AdminLogin(username){
        const type = "admin"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('userType');
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');

        if(user=== null)
        {
            return false;
        }
        else{
            return true;
        }
    }
}

export default new AuthenticateService();