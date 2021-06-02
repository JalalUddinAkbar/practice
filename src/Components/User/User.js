import React, { useState } from 'react';

const User = (props) => {
    const { name, email, picture, phone } = props.user;
    const fullName = name.first + ' ' + name.last;
    const [mobile, setMobile] = useState('')

    const addFriend = props.addFriend;

   

    const userStyle = {
        height: '300px',
        width: '400px',
        border: '1px solid red',
        marginLeft: '100px',
        marginBottom: '30px'
    }

    const showPhone = () => setMobile(phone);
    
    return (
        <div style={userStyle}>
            <div>
                <img src={picture.large} alt="" />
            </div>

            <div>
                <h4>{fullName}</h4>
                <p>Email: {email}</p>
                <p>Phone: {mobile}</p>
                <br />
                <button onClick={showPhone}>Show Phone Number</button>
                <button onClick={() => addFriend(fullName)}>Add Friend</button>
            </div>
        </div>
    );
};

export default User;