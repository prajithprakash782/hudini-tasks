import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../api';


const UserDetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const data = await fetchUserById(id);
            setUser(data);
            // Simulate a delay to show loader
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        getUser();
    }, [id]);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div style={{ backgroundColor: "#2ecc71", height: "100vh" }}>
            {loading ? (
                <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                    <span className="loader"></span>
                </div>
            ) : (
                <>
                    {user ? (
                        <>
                            <h1>{user.name}</h1>
                            <p><i className="fa-solid fa-envelope me-1"></i><span className='fw-bold'>Email: </span>{user.email}</p>
                            <p><i className="fa-solid fa-phone me-1"></i><span className='fw-bold'>Phone: </span>{user.phone}</p>
                            <p><i className="fa-solid fa-globe me-1"></i><span className='fw-bold'>Website: </span>{user.website}</p>
                            <button onClick={handleBack} style={{ margin: "10px", padding: "10px 20px", cursor: "pointer", backgroundColor: "white", color: "#2ecc71" }}>
                                Back
                            </button>
                        </>
                    ) : (
                        <p>User not found</p>
                    )}
                </>
            )}
        </div>
    );
};

export default UserDetailPage;
