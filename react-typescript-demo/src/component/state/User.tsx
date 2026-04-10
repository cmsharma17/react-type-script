import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}
export function User() {
    const[user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name:'Chandra',
            email:'cmsharma.cs@gmail.com'
        });
    }
    const handleLogout = () => {
        setUser(null);
    }

    return (<div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User Name is {user?.name}</div>
        <div>User Email address is {user?.email}</div>
    </div>)
}