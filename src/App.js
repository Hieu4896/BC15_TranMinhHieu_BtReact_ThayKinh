import logo from "./logo.svg";
import "./App.css";
import BaiTapXe from "./btbanhxe/BaiTapXe";
import Header from "./btglasses/Header";
import Body from "./btglasses/Body";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("./glassesImage/background.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <BaiTapXe />
      {/* <Header />
      <Body /> */}
    </div>
  );
}

export default App;
