import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';


const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
            setTimeout(()=>{
                setLoading(false)
            },2000)
            ;
        };

        getUsers();
    }, []);

    return (
        <div style={{backgroundColor:"#2ecc71",height:"100vh"}}>
            <h1 className='text-decoration-underline'>Users List</h1>
            {loading ? (
                <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
                     <span className="loader"></span>
                </div>
               
            ) : (
                <ol>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default UserPage;
