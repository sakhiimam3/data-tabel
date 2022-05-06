import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Styles from "../styles/selecInput.module.scss";
import LevelsModel from "./modals/levelsmodal";
import MyVerticallyCenteredModal from "./modals/propertiesModel";
import StatsModel from "./modals/statsmodal";

const SelectList = (props) => {
  // modal state
  const [properModel, setPropModel] = useState(false);
  const [levelModel, setLevelModal] = useState(false);
  const [statsModel, setSatesModal] = useState(false);

  //  states of get input data from models inputs
  const [modelInput, setModelInput] = useState([]);
  const [levelinput, setlevelInput] = useState([]);
  const [statsinput, setSatsInput] = useState([]);

  //  check box states
  const [checked, setChecked] = useState(false);

  // sensitive input state
  const [sesitiveInput, setSenitiveInput] = useState("");

  // handle check box input
  const handleClick = () => setChecked(!checked);

  // handle sensitive input event handler
  const handelSensitive = (e) => {
    setSenitiveInput(e.target.value);
  };

  // send input values to create form parent component
  props.childInputValues(modelInput, levelinput, statsinput, sesitiveInput,setModelInput,setlevelInput,setSatsInput);

  return (
    <React.Fragment>
      {/* properties list  */}
      <div className={Styles.SelectList}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item  pt-3 ">
            <div className={Styles.list_content}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className={`col-md-1 d-flex justify-content-start ${Styles.icon}`}
                  >
                    <i className=" fa fa-bars" aria-hidden="true"></i>
                  </div>

                  <div className={`col-md-10  ${Styles.select_list_text}`}>
                    <h6>Properties</h6>
                    <p>Textual traits that show up as rectangles</p>
                  </div>
                  <div
                    className={`col-md-1 d-flex justify-content-end ${Styles.select_list_btn} `}
                  >
                    <input
                      onClick={() => setPropModel(true)}
                      type="button"
                      value="+"
                      className="btn btn-outline-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* render properties input values below  */}
      <section>
        <div className="container">
          <div className="row">
            {modelInput.map((item) => {
              return (
                <>
                  <div className="col-md-2 mb-4">
                    <div className={Styles.render_model_input}>
                      <span className={Styles.Progress_link}>
                        {item.character}
                      </span>{" "}
                      <br />
                      <span>{item.chrName}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* level list  */}
      <div className={Styles.SelectList}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item  pt-3 ">
            <div className={Styles.list_content}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className={`col-md-1 d-flex justify-content-start ${Styles.icon}`}
                  >
                    <i className=" fa fa-star" aria-hidden="true"></i>
                  </div>

                  <div className={`col-md-10  ${Styles.select_list_text}`}>
                    <h6>Levels</h6>
                    <p>Numerical traits that show as a progress bar</p>
                  </div>
                  <div
                    className={`col-md-1 d-flex justify-content-end ${Styles.select_list_btn} `}
                  >
                    <input
                      onClick={() => setLevelModal(true)}
                      type="button"
                      value="+"
                      className="btn btn-outline-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* render level input values  below */}

      <section>
        <div className="container">
          <div className="row">
            {levelinput.map((item) => {
              return (
                <>
                  <div className="col-md-7">
                    <div className={Styles.render_model_input}>
                      <div className="d-flex justify-content-between">
                        <div className="text-dark">{item.speed}</div>
                        <div className="text-dark">
                          {item.from} to {item.to}
                        </div>
                      </div>
                      {/* <div class="progress">
                     <div class="progress-bar" role="progressbar" style={{width:`${Math.floor((item.speed / 100 )* 100)}`,color:'white'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Math.floor((item.speed / 100 ) * 100)}%</div>
                       </div> */}
                      <ProgressBar
                        now={(item.speed / 1000) * 100}
                        label={`${(item.speed / 1000) * 100}%`}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* stats list  */}
      <div className={Styles.SelectList}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item  pt-3 ">
            <div className={Styles.list_content}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className={`col-md-1 d-flex justify-content-start ${Styles.icon}`}
                  >
                    <i className=" fa fa-bar-chart" aria-hidden="true"></i>
                  </div>

                  <div className={`col-md-10  ${Styles.select_list_text}`}>
                    <h6>Stats</h6>
                    <p>Numerical traits that just show as numbers</p>
                  </div>
                  <div
                    className={`col-md-1 d-flex justify-content-end ${Styles.select_list_btn} `}
                  >
                    <input
                      onClick={() => setSatesModal(true)}
                      type="button"
                      value="+"
                      className="btn btn-outline-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* render level input values  */}

      <section>
        <div className="container">
          <div className="row">
            {statsinput.map((item) => {
              return (
                <>
                  <div className="col-md-7">
                    <div className={Styles.render_model_input}>
                      <div className="d-flex justify-content-between">
                        <div className="text-dark">{item.speed}</div>
                        <div className="text-dark">
                          {item.from} to {item.to}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/*unloackable list */}
      <div className={Styles.SelectList}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item  pt-3 ">
            <div className={Styles.list_content}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className={`col-md-1 d-flex justify-content-start ${Styles.icon}`}
                  >
                    <i
                      className=" fa fa-unlock-alt fa-bar-chart"
                      aria-hidden="true"
                    ></i>
                  </div>

                  <div className={`col-md-10  ${Styles.select_list_text}`}>
                    <h6>Unlockable Content</h6>
                    <p>
                      Include unlockable content that can only be revealed by
                      the owner of the item
                    </p>
                  </div>
                  <div
                    className={`col-md-1 d-flex justify-content-end ${Styles.select_list_btn} `}
                  >
                    <div className="form-check form-switch">
                      <input
                        style={{
                          width: "60px",
                          height: "20px",
                          backgroundColor: "grey",
                        }}
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={handleClick}
                        defaultChecked={checked}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {checked ? (
            <div className="render_textarea mt-3">
              <textarea
                cols="5"
                rows="5"
                value={sesitiveInput}
                onChange={handelSensitive}
                className={Styles.check_btn_textArea}
                placeholder="Enter content (access key, code to redeem, link to a file, etc.)"
              />
            </div>
          ) : null}
        </ul>
      </div>
      {/* sensitive content  list   */}
      <div className={Styles.SelectList}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item  pt-3 ">
            <div className={Styles.list_content}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className={`col-md-1 d-flex justify-content-start ${Styles.icon}`}
                  >
                    <i
                      className=" fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                  </div>

                  <div className={`col-md-10  ${Styles.select_list_text}`}>
                    <h6>Explicit & Sensitive Content</h6>
                    <p>
                      Include unlockable content that can only be revealed by
                      the owner of the item
                    </p>
                  </div>
                  <div
                    className={`col-md-1 d-flex justify-content-end ${Styles.select_list_btn} `}
                  >
                    <div className="form-check form-switch">
                      <input
                        style={{
                          width: "60px",
                          height: "20px",
                          backgroundColor: "grey",
                        }}
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* render modals here  */}
      <MyVerticallyCenteredModal
        show={properModel}
        onHide={() => setPropModel(false)}
        setModelInput={setModelInput}
      />

      <LevelsModel
        show={levelModel}
        onHide={() => setLevelModal(false)}
        setlevelInput={setlevelInput}
      />

      <StatsModel
        show={statsModel}
        onHide={() => setSatesModal(false)}
        setSatsInput={setSatsInput}
      />
    </React.Fragment>
  );
};

export default SelectList;
