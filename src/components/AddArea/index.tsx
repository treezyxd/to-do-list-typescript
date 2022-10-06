import React, { useState, KeyboardEvent } from "react";
import * as C from "./styles";

interface Props {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if(e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  }
  const handleClick = (e: React.MouseEvent) => {
    if(e.button === 0) {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <C.Container>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <div className="image" onClick={handleClick}>➕</div>
    </C.Container>
  );
}