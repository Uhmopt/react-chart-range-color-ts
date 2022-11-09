import "./App.css";
import SliderRange from "./views/componets/range.chart/SliderRange";
import {
  FaChartBar,
  FaChartLine,
  FaHandshake,
  FaLink,
  FaMoneyBill,
  FaSuitcase,
  FaTv,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "./assets/css/style.css";
import { useState } from "react";

function App() {
  const [seleted, setSelected] = useState(-1);
  const [theme, setTheme] = useState(false);

  const DATA = [
    {
      range: [33, 66],
      initial_value: 43,
      title: "Indicators",
      icon: <FaChartLine />,
    },
    {
      range: [33, 66],
      initial_value: 27,
      title: "Valuation",
      icon: <FaMoneyBill />,
    },
    {
      range: [33, 66],
      initial_value: 43,
      title: "Option Chain",
      icon: <FaLink />,
    },
    {
      range: [33, 66],
      initial_value: 86,
      title: "Fundementals",
      icon: <FaChartBar />,
    },
    {
      range: [33, 66],
      initial_value: 90,
      title: "Insider Trading",
      icon: <FaHandshake />,
    },
    {
      range: [33, 66],
      initial_value: 90,
      title: "Analyst POV",
      icon: <FaTv />,
    },
  ];

  const handleClick = (itemIndex: number) => {
    setSelected(itemIndex);
  };

  const handleThemeChangeClick = () => {
    if (theme) setTheme(false);
    else setTheme(true);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%", display: "flex" }}>
          {/* ------- Content Start ------- */}
          <div className={theme ? "container dark-theme" : "container"}>
            <div className={theme ? "gauges-title dark-theme" : "gauges-title"}>
              <div className="breifcase-icon">
                <FaSuitcase />
              </div>
              <span>Consumer Cyclical</span>
              <div className="percent">1.60%</div>
            </div>
            <div className={theme ? "sale-status dark-theme" : "sale-status"}>
              <span className="status cyan-status">Buy</span>
              <span className="status yellow-status">Hold</span>
              <span className="status red-status">Sell</span>
            </div>
            <div className="avg-slider">
              <SliderRange
                key={"slider"}
                triangle={false}
                ranges={[33, 66]}
                rail_height={20}
                value={39}
              />
            </div>
            <div
              className={theme ? "gauge-sliders dark-theme" : "gauge-sliders"}
            >
              {DATA.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={
                    seleted === itemIndex
                      ? theme
                        ? "section dark-contrast"
                        : "section contrast"
                      : "section"
                  }
                  onClick={() => handleClick(itemIndex)}
                >
                  <div className="gauge-title">
                    <div
                      className={
                        seleted === itemIndex
                          ? "gauge-icon yellow"
                          : "gauge-icon"
                      }
                    >
                      {item.icon}
                    </div>
                    <div className="gauge-icon-title">{item.title}</div>
                  </div>
                  <div className="gauge-wrapper">
                    <SliderRange
                      key={itemIndex}
                      ranges={item.range}
                      triangle={true}
                      rail_height={10}
                      value={item.initial_value}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --------- Content End --------- */}
          <div
            style={{
              width: "69%",
              border: "1px solid #615f5f77",
              borderBottom: "0px none",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <button
              style={
                theme
                  ? { fontSize: "30px", color: "yellow" }
                  : { fontSize: "30px", color: "blue" }
              }
              onClick={handleThemeChangeClick}
            >
              {theme ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "500px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "33%",
              border: "1px solid #615f5f77",
              borderRight: "0px none",
              marginLeft: "20px",
              paddingRight: "30px",
            }}
          ></div>
          <div
            style={{
              width: "69%",
              border: "1px solid #615f5f77",
              marginRight: "10px",
              borderLeft: "0px none",
              borderTop: "0px none",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
