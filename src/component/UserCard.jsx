import React from "react";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { CakeIcon } from "@heroicons/react/24/solid";
import "../styles/cards.css";
import alertify from "alertifyjs";
import "../styles/alertify.min.css";

export const UserCard = ({
  user,
  deleteUserById,
  setUpdateUser,
  setFormOpen,
  setEstado,
}) => {
  const handleDelete = () => {
    alertify.confirm(
      "Deleting user",
      "Are you sure you want to delete this user?",
      function () {
        deleteUserById(user.id);
        setEstado(true);
        console.log(user);
        alertify.alert(
          "USER DELETE",
          `Usuario <strong>${user.first_name} </strong>Eliminado`
        );

        alertify.success("Ok");
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };

  const handleUpdate = () => {
    setUpdateUser(user);
    setFormOpen(true);
  };

  return (
    <article className="cards">
      <h2 className="title">
        {user?.first_name} {user?.last_name}
      </h2>
      <hr />
      <ul className="ul">
        <li className="li">
          CORREO<span className="li__span">{user?.email}</span>
        </li>
        <li className="li">
          CUMPLIEAÑOS
          <span className="li__span">
            <CakeIcon className="cake" />
            {user?.birthday}
          </span>
        </li>
      </ul>
      <hr />

      <div className="cards__footer">
        <button
          className="button__trash"
          onClick={handleDelete}
          title="Eliminar Usuario"
        >
          <div className="tooltip-one">
            <p>Eliminar</p>
          </div>
          <ArchiveBoxIcon className="trash" />
        </button>

        <button
          className="button__edit"
          onClick={handleUpdate}
          title="Editar Usuario"
        >
          <div className="tooltip-two">
            <p>Editar</p>
          </div>
          <PencilSquareIcon className="edit" />
        </button>
      </div>
    </article>
  );
};
