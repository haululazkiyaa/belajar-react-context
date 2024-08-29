import { MyContext } from "../App";
import { useContext } from "react";

const Child = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      Child
      {/* Access the data from the context */}
      {data.map((item, index) => (
        <div key={index}>
          <p>Nama: {item.nama}</p>
          <p>Kota: {item.kota}</p>
          <p>Hobby: {item.hobby}</p>
        </div>
      ))}
      <button
        onClick={() =>
          setData((prevData) => [
            ...prevData,
            { nama: "John", kota: "Jakarta", hobby: "Coding" },
          ])
        }
      >
        Tambah Data
      </button>
    </div>
  );
};

export default Child;
