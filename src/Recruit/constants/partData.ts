import Part_1 from "../assets/part_1.svg?react";
import Part_2 from "../assets/part_2.svg?react";
import Part_3 from "../assets/part_3.svg?react";
import Part_4 from "../assets/part_4.svg?react";

interface Part {
  id: number;
  name: string;
}
const PartComponents: Record<number, React.FC<React.SVGProps<SVGSVGElement>>> = {
  1: Part_1,
  2: Part_2,
  3: Part_3,
  4: Part_4
};

export const partData: Part[] = [
  { id: 1, name: "PROJECT\nMANAGER" },
  { id: 2, name: "PRODUCT\nDESIGN" },
  { id: 3, name: "FRONTEND\nDEVELOPER" },
  { id: 4, name: "BACKEND\nDEVELOPER" }
];

export const partDataWithIcons = partData.map(data => ({
  ...data,
  icon: PartComponents[data.id]
}));
