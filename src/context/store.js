import React , {useState,useEffect} from "react";

const userContext = React.createContext({
    users:[],
    setUsers:()=>{}

});

export const UserProvider = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
        
        const response = await fetch('https://randomuser.me/api/?seed=dexi-interview');
        const data = await response.json();
        data.results.forEach((user) => {
        
          for (let i = 0; i < 15; i++) {
            setUsers((prev) => {
              return [...prev, {
                id: i ,
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                image: user.picture.thumbnail,
                title : user.location.timezone.description,
                country: user.location.country,
              }]
              });
            
          }
        
        
        }
        );
        
        }
        
        fetchData();  
        }, []);
    return (
        <userContext.Provider value={{users:users,setUsers:setUsers}}>
            {props.children}
        </userContext.Provider>
    )

}

export default userContext;