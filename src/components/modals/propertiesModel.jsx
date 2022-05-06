import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Styles from "../../styles/modal.module.scss";

function MyVerticallyCenteredModal(props) {
  //   dynamic input state
  const [inputList, setInputList] = useState([{ character: "", chrName: "" }]);

  // modal form add or remove functions
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { character: "", chrName: "" }]);
  };

  //   handle click event of the save button
  const handleSave = () => {
    props.setModelInput(inputList);
    setInputList([...inputList, { character: "", chrName: "" }]);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable="true"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={Styles.modal_title}
        >
          add properties
        </Modal.Title>
        <hr />
      </Modal.Header>
      <Modal.Body className={Styles.modal_body}>
        <p>
          Properties show up underneath your item, are clickable, and can be
          filtered in your collection's sidebar.
        </p>

        {/* modal form  start  */}
        <form className={Styles.form}>
          {inputList.map((x, i) => {
            return (
              <div key={i}>
                <div className="d-flex">
                  {inputList.length !== 1 && (
                    <button
                      className={Styles.removebtn}
                      onClick={(e) => handleRemoveClick(e, i)}
                    >
                      x
                    </button>
                  )}
                </div>
                <input
                  name="character"
                  placeholder="Character"
                  value={x.character}
                  onChange={(e) => handleInputChange(e, i)}
                />
                &nbsp;
                <input
                  className="ml10"
                  name="chrName"
                  placeholder="male"
                  value={x.chrName}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="d-flex justify-content-center">
                  {inputList.length - 1 === i && (
                    <button className={Styles.add_btn} onClick={handleAddClick}>
                      add more
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave} className="btn btn-success">
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
