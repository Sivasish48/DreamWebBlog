import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer,Header } from './components/index.js'



function App() {
 // now whenever we try or intent to fetch the data from db , it will take some time to render so below we are going to put a loading state 

 const [loading,setLoading]= useState(true)
 // now we have to dispatch the user 
 //  useDispatch() is a hook provided by the React-Redux library that allows you to dispatch actions to the Redux store from your React components.
 const dispatch = useDispatch()

 //now let us use the useEffect to implement the the loading state 
 useEffect(()=>{
  // authService.getCurrentUser(), presumably to fetch the current user's data asynchronously.
   authService.getCurrentUser()
   //Inside the then() callback, it checks if userData is truthy (meaning a user is logged in) and dispatches a login action with the userData as payload using the dispatch function.
   .then((userData)=>{
      if(userData){
        //When you dispatch an action in Redux, you typically provide an object where the action type is specified along with any additional data (payload) needed for that action. The additional data is often passed as properties of the object.
        //  userData is enclosed in curly braces because it is being passed as an object property to the login action creator. 
        dispatch(login({userData}))
      }else{
        //If userData is falsy (indicating no user is logged in), it dispatches a logout action.
        dispatch(logout())
      }
   }).catch((error)=>{
       console.log(`Error occured , ${error}`);
   }).finally(()=> setLoading(false))
 },[])


// now let us return in terms of if the loading is not happening
 
return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
    <div className="w-full block">
      <Header/>
      <main>
       Todo {/*<Outlet/>*/}
      </main>
      <Footer/>
    </div>
  </div>
) : null
 
}

export default App