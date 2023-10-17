import { styled } from 'styled-components'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, email, password)
        } catch(err){
            console.error(err)
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            } catch(err){
                console.error(err)
            }
    }

    const logout = async () => {
        try {
            await signOut(auth)
            } catch(err){
                console.error(err)
            }
    }



    console.log(auth?.currentUser?.email);

  return (
    <Container>
       <Content>
        <input type="email" placeholder='Email...' onChange={(e) => { setEmail(e.target.value)}} className='form-control' />
        <input type="password" placeholder='Password..' onChange={ (e) => { setPassword(e.target.value)}} className='form-control'/>
        <button className='btn btn-primary' onClick={ signIn } >Sign In</button>
        <button className='btn btn-light border' onClick={ signInWithGoogle } >Sign In With Google</button>
        <button className='btn btn-secondary' onClick={ logout } >Logout</button>
       </Content>
    </Container>
  )
 
   
}

const Container = styled.div`
    overflow: hidden;
    height: calc(100vh - 70px);
    position: relative;
    top: 70px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`

const Content = styled.div`
    width: 50%;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;

    input, button {
        margin: 12px 0;
    }
    
`

