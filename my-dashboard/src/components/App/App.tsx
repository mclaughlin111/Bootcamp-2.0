import { Container } from "../Container";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export function App() {
  return <Container />;
}
