import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import FunComp from "./Funcomp";
import FaceBookLogin from "./FacebookLogin";
import { ImageUpload } from "./imageUpload";
import { GooglePlaces } from "./GooglePlaces";
function App() {
  return (
    <div>
      <ThemeProvider>
        hello
        <FunComp />
        {/*
      <FaceBookLogin/> */}
        <ImageUpload />
        {/* <GooglePlaces /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
