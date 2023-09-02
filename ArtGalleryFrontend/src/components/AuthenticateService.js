import React from 'react';
import { Component } from 'react'

class AuthenticateService extends Component
{
    Login(username)
    {
        const type = "artist"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    CustomerLogin(username)
    {
        alert("first statement");
        const type = "customer"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
        alert("last statement");
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