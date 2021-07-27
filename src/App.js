import "./styles.css";
import { Title } from "./components/Title";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { useState } from "react";

export default function App() {
  const [change, setChange] = useState("変更前");
  const changeName = () => {
    setChange("変更後");
  };
  return (
    <div className="App">
      <Title title="Hello World" />
      <p>{change}</p>
      <div className="box-space">
        <Box
          box="https://source.unsplash.com/random"
          name="ランダム画像１"
          alt="ランダム画像"
        />
        <Box
          box="https://source.unsplash.com/random"
          name="ランダム画像２"
          alt="ランダム画像"
        />
        <Box
          box="https://source.unsplash.com/random"
          name="ランダム画像３"
          alt="ランダム画像"
        />
      </div>
      <Button button="ボタン" change={changeName} />
    </div>
  );
}
