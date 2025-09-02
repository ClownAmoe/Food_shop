"use client";

import { useEffect, useState } from "react";

import RadioBtn from "../../../../components/radioBtn/radioBtn";
import Restaurants from "../../../../components/restaurantsList/restaurants";

import { rests } from "./rests";
import { objProp } from "../../../../components/restaurantsList/type";
import { CLASSNAME } from "./classname";
import Dropdown from "../../../../components/dropdown/dropdown";

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
    <div className="w-full">
      <div className={CLASSNAME.WRAPPER}>
        <p className={CLASSNAME.PARAGRAPH}>
          Up to -40% 🎊 Order.uk exclusive deals
        </p>
        <p className={CLASSNAME.PARAGRAPH_MOBILE}>
          Up to -40% Discount Offers 🎊
        </p>
        <ul className={CLASSNAME.CONTAINER}>
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
        <div className="md:hidden block w-full -mb-6">
          <Dropdown
            name={"Pizza & Fast Food"}
            options={roles}
            change={handleRoleChange}
          />
        </div>
      </div>

      <div className={CLASSNAME.RESTAURANT_WRAPPER}>
        <Restaurants arr={filteredRests} />
      </div>
    </div>
  );
}
