import { useEffect, useState } from "react";
import React from "react";
import useUserCrud from "./hooks/useUserCrud";
import { UserCard } from "./component/UserCard";
import { Header } from "./component/Header";
import { FormUser } from "./component/FormUser";
import "./styles/app.css";
import { NoUser } from "./component/NoUser";
import { Loading } from "./component/Loading";

function App() {
  const [updateUser, setUpdateUser] = useState();
  const [formOpen, setFormOpen] = useState(false);

  const { users, createNewUser, deleteUserById, updateUserById, getAllUsers } =
    useUserCrud();

    const [estado, setEstado] = useState(false)

  useEffect(() => {
    getAllUsers();
    setEstado(false)

    setInterval(()=> {
        getAllUsers();
    },5000)

  }, []);

  return (
    <div className="App">
      <Header setFormOpen={setFormOpen} />

      <FormUser
        setFormOpen={setFormOpen}
        formOpen={formOpen}
        createNewUser={createNewUser}
        updateUser={updateUser}
        updateUserById={updateUserById}
        setUpdateUser={setUpdateUser}
      />

      <main className="main">
        {users ? (
          <>
            {users.length ? 
              <>
                {users?.map((user) => (
                  <UserCard
                    setFormOpen={setFormOpen}
                    key={user.id}
                    user={user}
                    deleteUserById={deleteUserById}
                    setUpdateUser={setUpdateUser}
                    setEstado={setEstado}
                  />
                ))}
              </>
             : 
              <NoUser />
            }
          </>
        ) : (
          <Loading />
        )}
      </main>
    </div>
  );
}

export default App;
