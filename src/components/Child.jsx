import { MyContext } from "../App";
import { useContext } from "react";

const Child = () => {
  const { data } = useContext(MyContext);

  return (
    <div>
      Child
      {/* Access the data from the context */}
      <p>Nama: {data.nama}</p>
      <p>Kota: {data.kota}</p>
      <p>Hobby: {data.hobby}</p>
    </div>
  );
};

export default Child;
