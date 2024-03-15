import config from '../config/config'

// to integrate and write code for the accounts client and thier ids 
import { Client,Account,ID } from 'appwrite'

// wxpoet a class called authservice

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID)

        this.account = new Account(this.client)
    }

    // now let us call the appwrite services in this class

    async createAccount({email,password,name}){
        try {
            // the ID.unique() creates unique id of the user just like nanoId()
            const userAccount = await this.account.create(ID.unique(),email,password,name)
             
            // let us check whether user account got created or not

             if (userAccount) {
                // another method
                return this.login()
             } else {
                return userAccount
             }

        } catch (error) {
            throw error
        }
        
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
            return error
        }
    }

    
}



// now create an object from the instance of the above class and export the object so that anyone can run the methods on the imported object

const authService = new AuthService()
export default authService;