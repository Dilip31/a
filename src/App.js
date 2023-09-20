import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Join from "./pages/Join";
import Disorder from "./components/Disorder";
import IndicationSignSymptoms from "./components/IndicationSignSymptoms";
import { useEffect } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import QuestionAnswer from "./components/new/QuestionAnswer";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer":
        title = "";
        metaDescription = "";
        break;
      case "/disorder":
        title = "";
        metaDescription = "";
        break;
      case "/solution":
        title = "";
        metaDescription = "";
        break;
      case "/indication-sign-symptoms":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/question-answer" element={<QuestionAnswer />} />
    
      <Route path="/disorder" element={<Disorder />} />
   
  
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      
      <Route
        path="/indication-sign-symptoms"
        element={<IndicationSignSymptoms />}
      />
    </Routes>
  );
}
export default App;
