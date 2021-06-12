import { useState } from "react";
import "./styles.css";

const App = ({ red, amber, green }) => {
  const stages = {
    stop: { red: true, amber: false, green: false, next: "readyToGo" },
    readyToGo: { red: false, amber: true, green: false, next: "readyToStop" },
    readyToStop: { red: false, amber: false, green: true, next: "stop" },
  };

  const [stage, setStage] = useState(stages.stop);

  return (
    <div className="black-box" onClick={() => setStage(stages[stage.next])}>
      <div className={`light ${stage.red ? "red" : "inactive"}`} />
      <div className={`light ${stage.amber ? "amber" : "inactive"}`}></div>
      <div className={`light ${stage.green ? "green" : "inactive"}`}></div>
    </div>
  );
};

export default App;
