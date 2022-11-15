import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";
// import { CssModules } from "./CssModules";
// import { StyledJsx } from "./StyledJsx";

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
// ReactDOM.render(<CssModules />, document.getElementById("root"));
// ReactDOM.render(<StyledJsx />, document.getElementById("root"));
