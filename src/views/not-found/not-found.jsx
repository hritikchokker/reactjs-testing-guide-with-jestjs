import React from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      NotFound
      <button onClick={backToHome}>Back to home</button>
    </div>
  );
}

export default NotFound;
