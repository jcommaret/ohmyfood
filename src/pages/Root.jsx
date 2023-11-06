import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      Layout
      <Outlet />
    </div>
  );
}

export default Root;
