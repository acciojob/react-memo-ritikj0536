import React from "react";

const ReactMemo = ({todos}) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ReactMemo);
