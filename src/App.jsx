import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>官僚</button>
            <button>削除</button>
          </div>
          <div>
            <li>rrrrrrrrr</li>
            <button>官僚</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>官僚のTodo</p>
        <ul>
          <div>
            <li>ううううううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
