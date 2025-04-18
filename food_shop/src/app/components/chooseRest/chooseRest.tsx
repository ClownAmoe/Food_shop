"use client";
import { useEffect, useState } from "react";
import { rests } from "./rests";
import RadioBtn from "../radioBtn/radioBtn";
import Restaurants from "../restaurants/restaurants";
import { objProp } from "../restaurants/type";

export default function ChooseRest() {
  const roles = ["All", "Vegan", "Sushi", "Pizza & Fast food", "Others"];
  const [filteredRests, setFilteredRests] = useState<objProp[]>([]);
  const [selectedRole, setSelectedRole] = useState("All");

  useEffect(() => {
    if (selectedRole === "All") {
      setFilteredRests(rests);
    } else {
      setFilteredRests(rests.filter((rest) => rest.role === selectedRole));
    }
  }, [selectedRole]);

  const handleRoleChange = (newRole: string) => {
    if (newRole !== selectedRole) {
      setSelectedRole(newRole);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between gap-8 items-center mt-10">
        <p className="text-3xl">Up to -40% 🎊 Order.uk exclusive deals</p>
        <ul className="flex flex-row justify-between gap-8">
          {roles.map((role) => (
            <li key={role}>
              <RadioBtn
                role={role}
                onChange={handleRoleChange}
                checked={selectedRole === role}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 ml-2 mr-auto">
        <Restaurants arr={filteredRests} />
      </div>
    </div>
  );
}
