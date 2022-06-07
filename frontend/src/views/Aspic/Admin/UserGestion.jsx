import { useState } from "react";
import AddUser from "./AddUser";
import ManageUsers from "./ManageUsers";

export default function UserGestion() {
  const [change, setChange] = useState(0);
  return (
    <div className="mt-2" style={{ width: "80%" }}>
      <div className="d-flex flex-row">
        <h1>Gestion des utilisateur</h1> <AddUser setChange={setChange} />
      </div>
      <ManageUsers change={change} setChange={setChange} />
    </div>
  );
}
