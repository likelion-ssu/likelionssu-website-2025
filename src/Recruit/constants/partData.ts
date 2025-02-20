import Part_pm from "../assets/part_pm.svg?react";
import Part_de from "../assets/part_de.svg?react";
import Part_fe from "../assets/part_fe.svg?react";
import Part_be from "../assets/part_be.svg?react";

interface Part {
  id: "pm" | "de" | "fe" | "be";
  name: string;
}

const PartComponents: Record<Part["id"], React.FC<React.SVGProps<SVGSVGElement>>> = {
  pm: Part_pm,
  de: Part_de,
  fe: Part_fe,
  be: Part_be
};

export const partData: Part[] = [
  { id: "pm", name: "PROJECT\nMANAGER" },
  { id: "de", name: "PRODUCT\nDESIGN" },
  { id: "fe", name: "FRONTEND\nDEVELOPER" },
  { id: "be", name: "BACKEND\nDEVELOPER" }
];

export const partDataWithIcons = partData.map(data => ({
  ...data,
  icon: PartComponents[data.id]
}));
