import {  Routes, Route } from "react-router-dom";
import BlaBla from "./BlaBla";
import Body from "./Body";
import Layout from "./Layout";
import Whatever from "./Whatever";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Body />} />
      <Route path="whatever" element={<Whatever />} />
    </Route>
    <Route path="blabla" element={<BlaBla />} />
  </Routes>
  );
}

export default App;
