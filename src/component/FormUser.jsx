import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import defaults from '../util/defualtReset';
import '../styles/form.css'
import alertify from 'alertifyjs'
import '../styles/alertify.min.css'

export const FormUser = ({ createNewUser, updateUser, updateUserById, setUpdateUser, setFormOpen, formOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const [create, setCreate] = useState(false);

  useEffect(() => {

    let newUser = undefined;
    
    if(updateUser){
        newUser =  Object.keys(updateUser).reduce((elementos, keys) => {
            return updateUser[keys] != updateUser.id ? {...elementos, [keys] : updateUser[keys]} : elementos
    
         }, {})

         setCreate(true)
    }

    reset(newUser);


  }, [updateUser]);

  const submit = (data) => {
    if (updateUser) {
       const id = updateUser.id;

       updateUserById(id, data)
        alertify.alert("USER UPDATE",`Usaurio ${data.first_name} </strong>  Actualizado`)
    setUpdateUser()
    setCreate(false)
    setFormOpen(false)

        
    } else {

        let pass = true

        for(const d in data){
            if(!data[d]){
                pass = false
            }
        }

        if (pass){
            createNewUser(data);
            alertify.alert("CREATE USER","Nuevo usario Agregado")
            setFormOpen(false)
        }else{
            alertify.alert("Sorry!!","Lo sentimos no pueden haber campos vacios")
        }

      
    }
    reset(defaults);
    
  };

  const handleCloser = () => {
    reset(defaults);
    setUpdateUser()
    setCreate(false)
    setFormOpen(false)
    
  }

  return (
   <article className={formOpen ? 'form__container form__open' : 'form__container'}>
   
     <form className="form" onSubmit={handleSubmit(submit)}>
        <span onClick={handleCloser} className="closer">
            x
        </span>
      <div className="form__item">
        <label htmlFor="email">Email </label>
        <input {...register("email")} type="email" id="email" />
      </div>

      <div className="form__item">
        <label htmlFor="password">Password </label>
        <input {...register("password")} type="password" id="password" />
      </div>
      <div className="form__item">
        <label htmlFor="first_name">First name </label>
        <input {...register("first_name")} type="text" id="first_name" />
      </div>
      <div className="form__item">
        <label htmlFor="last_name">Last name </label>
        <input {...register("last_name")} type="text" id="last_name" />
      </div>
      <div className="form__item">
        <label htmlFor="birthday">Birthday </label>
        <input {...register("birthday")} type="date" id="birthday" />
      </div>

      <input
      className="submit"
        type="submit"
        value={create ? "Actualizar Usuario" : "Agregar nuevo usuario"}
      />
    </form>
   </article>
  );
};
