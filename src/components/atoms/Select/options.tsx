import { OptionTypes } from ".";
import { GridIcon, ListIcon } from "./styles";

export const SelectOptions: OptionTypes[] = [
  {
    label: "List View",
    value: 1,
    icon: <ListIcon />,
  },
  {
    label: "Grid View",
    value: 2,
    icon: <GridIcon />,
  },
];
