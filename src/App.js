import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PasswordForm from "./PasswordForm";
import TeamPoints from "./TeamPoints";
import Trading from "./Trading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/PasswordForm" />} />
        <Route path="/PasswordForm" element={<PasswordForm />} />
        <Route path="/TeamPoints" element={<TeamPoints />} />
        <Route path="/Trading" element={<Trading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
