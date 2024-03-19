import config from '../config/config'

import { Client, ID,Databases,Storage,Query } from 'appwrite'

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
       this.client
       .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }
     

    //to create the post
    async createPost(title,slug,content,featuredImage,status,userId){
           try {
               return await this.databases.createDocument(
                 config.appwriteDatabaseID,
                 config.appwriteCollectionID,
                 slug,
                 {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                 }
               )
           } catch (error) {
              console.log("Appwrite service :: createPost :: error",error);
           }
    }

        // to update the post
    async updatePost(slug,{title, content, featuredImage,status}){
          try {
            return await databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
          } catch (error) {
            console.log("Appwrite service:: updatePost :: error",error);
          }
    }

    //to delete the post

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
             )
             return true
        } catch (error) {
            console.log("Appwrite service:: deletePost :: error",error);
            return false
        }
    }


       // method to get a particular post
    async getPost(slug){
        try {
           return await this.databases.getDocument(
            config.appwriteDatabaseID,
            config.appwriteCollectionID,
            slug
           ) 
        } catch (error) {
            console.log("Appwrite service:: getPost :: error",error);
            return false
        }
    }

    // method to get all post (only active documents)
      async getPosts (queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service:: getPosts :: error",error);
            return false
        }
      }

      // File uploading service method

      async uploadFile(file){
        try {
           return  await this.bucket.createFile(
             config. appwriteBucketID,
             ID.unique(),
             file
           )
        } catch (error) {
            console.log("Appwrite service:: uploadFile :: error",error);
            return false
        }
      }
        
      // file deleting service

      async deleteFile(fileID){
        try {
            return  await this.bucket.deleteFileFile(
                config. appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log("Appwrite service:: deleteFile :: error",error);
            return false
        }
      }

      // method to do the file preview 

      getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config. appwriteBucketID,
            fileID,
        )
      }

    



}


const service = new Service()
export default service