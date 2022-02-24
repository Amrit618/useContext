import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FaceBookLogin = () => {
    const [auth, setAuth] = useState(false)
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")


    const responseFacebook = (response) => {
        console.log(response);
        !!response &&setAuth(true)
      }

      const componentClicked = () => {
        console.log("fb btn clicked");
      }

    return (<div>
        {auth ?
            <div onClick={()=>setAuth(false)}>
                logout
</div>
            :
            <div>
                <FacebookLogin
    appId="497342661158944"
    autoLoad={true}
    fields="name,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
</div>}
    </div>);
}

export default FaceBookLogin;