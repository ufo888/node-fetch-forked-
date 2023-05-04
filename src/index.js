import { Map, View } from "ol";
import fetch from "node-fetch";

try {
  fetch("https://www.yahoo.com/").then((res) => console.log(res));
} catch (error) {
  console.log(error);
}
