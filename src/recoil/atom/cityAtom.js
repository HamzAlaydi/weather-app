import { atom } from "recoil";

export const cityState = atom({
  key: "cityName",
  default: "gaza",
});
export const weatherState = atom({
  key: "weather",
  default: "recoil",
});
