import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            This is {loggedInUser.name}'s profile
        </div>
    );
};

export default Profile;