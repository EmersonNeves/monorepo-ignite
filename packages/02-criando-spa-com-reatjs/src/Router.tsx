import { Routes, Route } from "react-router-dom";
import { DefaultLayOut } from "./layouts/DefaultLayout";
import { Historic, Home } from "./pages";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayOut/>}>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<Historic />} />
      </Route>
    </Routes>
  );
}
