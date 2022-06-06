import { useParams } from "react-router-dom";

export default function Restaurant() {
  const { id } = useParams();
  return <h1>Le Restaurant {id}</h1>;
}
