import { ToastContainer } from 'react-toastify';
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import {useState , useEffect} from 'react';
import { getMeData } from './helpers/FetchHelper';
import Footer from './components/footer/Footer';


function App(){
   const [user,set]= useState({});
   
   useEffect( ()=>{ 
   getMeData(localStorage.getItem('token'), (data)=>{
    set(data);
        });
    }  , [] );

return <div className="App">
    <>
             {user && user._id}
            <SinglePageAppComp  set={set} user={user}></SinglePageAppComp>
            <ToastContainer></ToastContainer>

            <Footer>
                זה יהיה למטה 
            </Footer>
    </>
</div>
}

export default App;