import { atom } from "recoil";

export const handleToggleAtom = atom({
  key: "handleToggleAtom",
  default: false,
});

export const handleThemeAtom = atom({
  key: "handleThemeAtom",
  default: false,
});
