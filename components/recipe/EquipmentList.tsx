import React from "react";

interface EquipmentListProps {
  equipment: string[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipment }) => {
  return (
    <div className="flex flex-row md:flex-col">
      {equipment.map((item, index) => (
        <div
          key={index}
          className="bg-orange rounded-xl p-2.5 m-1 text-center font-poppins text-base font-semibold"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
