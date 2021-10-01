import React, {useEffect} from "react";
import "../components/index.css";
import light_bulb from "../images/light_bulb.svg";
import TextTransition, { presets } from "react-text-transition";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const textWithShadow = {
  fontSize: "28px",
  color: "black",
  textShadow: "0px 0px 9px white",
};

const textWithYellowShadow = {
  fontSize: "28px",
  color: "burlywood",
  textShadow: "1px 1px 9px white",
};

const lightBulbStyle = {
  zIndex: "-1",
  position: "absolute",
  left: "438px",
  top: "-100px",
};

// markup
const IndexPage = () => {
  const [usage, setUsage] = React.useState(0);
  const [currentBulb, setCurrentBulb] = React.useState("Incandescent")
  const [newBulb, setNewBulb] = React.useState("LED")
  const [hours, setHours] = React.useState(1)
  const [count, setCount] = React.useState(1)
  const [state, setState] = React.useState("AVG")

var stateMap = {
  "AVG": 13.3,
  "AK": 22.53,
  "AL": 13.00,
  "AR": 10.59,
  "AZ": 11.69,
  "CA": 22.26,
  "CO": 12.38,
  "CT": 21.41,
  "DC": 13.35,
  "DE": 13.62,
  "FL": 12.00,
  "GA": 11.38,
  "HI": 28.84,
  "IA": 12.34,
  "ID": 9.67,
  "IL": 13.41,
  "IN": 13.23,
  "KS": 12.98,
  "KT": 11.43,
  "LA": 9.94,
  "MA": 22.10,
  "MD": 13.27,
  "ME": 16.17,
  "MI": 16.43,
  "MN": 12.92,
  "MO": 10.07,
  "MS": 11.99,
  "MT": 11.22,
  "NC": 11.64,
  "ND": 10.26,
  "NE": 10.73,
  "NH": 19.20,
  "NJ": 15.69,
  "NM": 12.94,
  "NV": 11.61,
  "NY": 18.91,
  "OH": 12.35,
  "OK": 10.27,
  "OR": 11.12,
  "PA": 13.51,
  "RI": 23.58,
  "SC": 12.68,
  "SD": 12.03,
  "TN": 11.10,
  "TX": 12.20,
  "UT": 10.29,
  "VA": 12.12,
  "VT": 19.68,
  "WA": 9.84,
  "WI": 14.77,
  "WV": 12.46,
  "WY": 11.12,
}

  function usageCalc() {
    var watts = 0,
      newWatt = 0,
      newKiloWatts = 0,
      kiloWatts = 0,
      kiloWattDiff = 0;

    if (currentBulb === "Incandescent") {
      watts = 60;
    } else {
      watts = 12;
    }
    if (newBulb === "LED") {
      newWatt = 8;
    } else {
      newWatt = 12;
    }

    kiloWatts = watts * hours;
    newKiloWatts = newWatt * hours;
    kiloWattDiff = kiloWatts - newKiloWatts;

    setUsage((kiloWattDiff * count) / 1000);
  }

  useEffect(() => {
    usageCalc()
    return () => {
    };
  }, [currentBulb, newBulb, hours, count]);

  return (
    <main style={pageStyles}>
      <div className="jumbotron">
        <div className="parallax">
          <div id="group1" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <img style={lightBulbStyle} src={light_bulb} alt="light_bulb" />
                <h4 style={{ fontSize: "50px" }}>
                  {" "}
                  There are an estimated{" "}
                  <span className="flicker" style={{ color: "orange" }}>
                    12
                  </span>{" "}
                  billion light bulbs on the planet.{" "}
                </h4>
              </div>
            </div>
          </div>
          <div id="group2" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title"></div>
            </div>
            <div className="parallax__layer parallax__layer--back">
              <div className="title"></div>
            </div>
          </div>
          <div id="group3" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title">
                <h4 style={{ fontSize: "50px" }}>
                  About <span style={{ color: "orange" }}>1/3</span> of these
                  are in the United States{" "}
                </h4>
              </div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title"></div>
            </div>
          </div>
          <div id="group4" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <h4 style={textWithYellowShadow} id="lightbulb">
                  In 2010 Incandescent lighting accounted for 45% of lightbulbs
                  in use. While LED bulbs accounted for less than 2%.
                </h4>
              </div>
            </div>
            <div className="parallax__layer parallax__layer--back">
              <div className="title"></div>
            </div>
            <div className="parallax__layer parallax__layer--deep">
              <div className="title"></div>
            </div>
          </div>
          <div id="group5" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title"></div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <h4 style={{fontSize: "24px"}}>
                  Incandescent light bulbs operate at an efficiency level of
                  less than 3%. With most energy being converted to heat and misused in many cases.
                </h4>
                <h4 style={{fontSize: "24px"}}>
                  While Compact Fluorescent bulbs operate around 80% efficiency and
                  LED bulbs push up to 90% energy efficiency.
                </h4>
              </div>
            </div>
          </div>
          <div id="group6" className="parallax__group">
            <div className="parallax__layer parallax__layer--back">
              <div className="title"></div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">
                <h4 style={textWithShadow}>
                  With the gain in effeciency, by 2027, widespread use of LEDs
                  could save about{" "}
                  <span
                    style={{ color: "orange", textShadow: "0 0 4px black" }}
                  >
                    348 TWh
                  </span>{" "}
                  (compared to no LED use) of electricity:
                </h4>
                <h4 style={textWithShadow}>
                  This is the equivalent annual electrical output of 44 large
                  electric power plants (1000 megawatts each), and a total
                  savings of more than{" "}
                  <span
                    style={{ color: "#21e720", textShadow: "0 0 4px black" }}
                  >
                    $30 billion
                  </span>{" "}
                  at today&apos;s electricity prices.
                </h4>
              </div>
            </div>
          </div>
          <div id="group7" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div style={{margin: "30px 0"}} className="title">
                <h4>Energy Savings Calculator</h4>
                <div>
                  <div className="flx-cntr flx-clm">
                    <h5>
                      Calculate how much money and energy you could potentially
                      save by switching to LED lighting today
                    </h5>
                    <div>
                      <form className="flx-cntr flx-clm" id="lightbulb-form">
                        <div style={{ width: "100%" }} className="input-field">
                          <div className="flx-clm flx-cntr">
                            <label htmlFor="bulb-count">
                              Number of Bulbs you are willing to change in your
                              household
                            </label>
                            <input
                              onChange={(e) => {setCount(e.target.value)}}
                              type="number"
                              value={count}
                              step="1"
                              min="1"
                              id="bulb-count"
                            />
                          </div>
                        </div>
                        <div className="input-field">
                          <div className="flx-clm flx-cntr">
                            <label htmlFor="hours">
                              Average number of hours used per day
                            </label>
                            <input   
                              onChange={(e) => {setHours(e.target.value)}}
                              type="number"
                              value={hours}
                              step="1"
                              min="1" 
                              id="hours"
                            />
                          </div>
                        </div>
                        <div className="input-field">
                          <div className="flx-clm flx-cntr">
                            <label htmlFor="hours">
                              Which State are you in?
                            </label>
                            <select
                              onChange={(e) => {setState(e.target.value)}}
                            >
                              <option value="AVG">US Average</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>		
                          </div>
                        </div>
                        <div className="input-field">
                          <div className="flx-clm flx-cntr">
                            <label htmlFor="current-type">
                              Current Bulb Type?
                            </label>
                            <select onChange={(e) => {setCurrentBulb(e.target.value)}} id="current-type">
                              <option value="Incandescent">Incandescent</option>
                              <option value="CFL">Compact Fluorescent</option>
                            </select>
                          </div>
                        </div>
                        <div className="input-field">
                          <div className="flx-clm flx-cntr">
                            <label htmlFor="bulb-type-after">
                              New Bulb Type?
                            </label>
                            <select onChange={(e) => {setNewBulb(e.target.value)}} id="new-type">
                              <option value="LED">LED</option>
                              <option value="CFL">Compact Fluorescent</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="output">
                  <ul id="lightbulb-output">
                    <p>Amount of energy saved
                    <TextTransition
                      inline={true}
                      text={usage.toLocaleString()}
                      springConfig={ presets.wobbly }
                      style={{color: "orange", fontSize: `25px`, fontWeight: 600, margin: "0 10px"}}
                    /> Kilowatts-hours Per Day</p>
                  </ul>
                  <ul id="lightbulb-year">
                    <p>Which adds up to 
                    <TextTransition
                      inline={true}
                      text={(usage * 365).toLocaleString()}
                      springConfig={ presets.wobbly }
                      style={{color: "orange", fontSize: "25px", fontWeight: 600, margin: "0 10px"}}
                    />
                    Kilowatt-hours a year</p>
                  </ul>
                  <ul id="lightbulb-savings">
                    <p>
                      Which at the average rate of 12 cents per kilowatt-hour adds up to a savings of  
                      <TextTransition
                          inline={true}
                          text={`$${((usage * 365) * (stateMap[state] / 100)).toLocaleString()}`}
                          springConfig={ presets.wobbly }
                          style={{color: "#21e720", fontSize: "25px", fontWeight: 600, margin: "0 10px"}}
                        />
                      a year 
                    </p>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
);
};

export default IndexPage;
