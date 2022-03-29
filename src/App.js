import React from "react";
import "./App.css";
import { Tes, Tes2 } from "./Tes";
import Contoh from "./Module/Contoh";
import dayjs from "dayjs";

function App() {
  const waktu = new Date();
  let [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <div className="header">
        <h1
          style={{
            color: "blue",
            fontSize: "50px",
          }}
        >
          Hello World
        </h1>

        <div className="contoh">
          <h4>{count}</h4>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Tambah
          </button>
          <button>Kurang</button>
        </div>
        <p>Waktu saat ini {dayjs(waktu).format("DD-MM-YYYY hh:ss:mm")}</p>
        <Tes nama="ihsan" sekolah="SMK MQ" />
        <Tes nama="hilmi" sekolah="SMP MQ" />
        <Tes nama="nabil" sekolah="SD MQ" />
        {/* <Contoh /> */}

        <Tes2 mapel="Matematika" nilai={90} color="green" lulus={true} />
        <Tes2 mapel="Fisika" nilai={80} color="purple" lulus />
        <Tes2 mapel="Kimia" nilai={70} lulus={false} />

        <Tes2 mapel="PAI" nilai={50} />
      </div>
    </React.Fragment>
  );
}

export default App;
