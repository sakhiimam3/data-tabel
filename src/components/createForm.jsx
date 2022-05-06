import React, { useState, useEffect } from "react";
import Select from "react-select";

import metmakImg from "../Assets/Images/metamaskLogo.png";
import polyImage from "../Assets/Images/polygon.png";

import Styles from "../styles/createform.module.scss";
import CreateCollection from "./createCollection";
import SelectList from "./selectList";

const CreateForm = (props) => {
  // blockChain select states
  const [selectedOption, setSelectedOption] = useState(null);

  //  supply stats
  const [supply, setSupply] =useState(1);

  // input states ..................//
  const [input, setinput] = useState({
    name: "",
    external: "",
    description: "",
  });

  const [disable, setDisable] = useState(true);

  // get all input from child states
  const [propInput, setPropInput] = useState(null);
  const [levelInput, setleveInput] = useState(null);
  const [statsInput, setstatsInput] = useState(null);
  const [sensitive, setSensitive] = useState(null);
  const [collection, setCreatecollection] = useState(null);

  




  // handle supply inut handler
  const handleSupply = (e) => {
    setSupply(e.target.value);
  };

  //  select input options
  const options = [
    { value: "metamask", label: `metamask`, icon: <img src={metmakImg} /> },
    { value: "polygon", label: `polygon`, icon: <img src={polyImage} /> },
  ];

  // custom selct styling
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 35,
      background: "white",
    }),
  };

  // input handler function ............//

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setinput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      input.name &&
      input.external &&
      input.description &&
      collection &&
      supply > 1 &&
      selectedOption &&
      propInput &&
      levelInput &&
      statsInput &&
      sensitive
    ) {
      setDisable(false);
    }
  });
  // get all input values from children component in two below functions

  const childInputValues = (propInp, levelInp, SatsInp, sensit) => {
    setPropInput(propInp);
    setleveInput(levelInp);
    setstatsInput(SatsInp);
    setSensitive(sensit);
  
    

  };

  // get collection input values from child com 
  const getCreateCollection = (collection) => {
    setCreatecollection(collection);
  };




  // final submit function
  const handleSubmit = () => {
    setinput({ name: "", external: "", description: "" });
    setSupply(1);
    setSelectedOption(null)
    setPropInput([])
    setleveInput([])
    setstatsInput([])
    
    
   
    props.setImage(null)
    console.log(input, "name,external,description");
    console.log(collection, "collection");
    console.log(propInput, "properties model ");
    console.log(levelInput, "level model ");
    console.log(statsInput, "stats model ");
    console.log(sensitive, "senstive input value");
    console.log(supply, "supply input value");
    console.log(selectedOption, "selec collection value");
  };

  return (
    <>
      <form className={Styles.form}>
        <div className="mt-5">
          <label className="mb-3">
            name <span className="text-danger">*</span>
          </label>{" "}
          <br />
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Item name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-5">
          <label className="mb-2">external link</label>{" "}
          <p>
            OpenSea will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
          <input
            name="external"
            style={{ width: "100%" }}
            type="text"
            placeholder="https://yoursite.io/item/123"
            value={input.external}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-5">
          <label className="mb-2"> description</label>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
          <textarea
            className={Styles.text_area}
            type="text"
            placeholder="Provide a detailed description of your item"
            name="description"
            row="4"
            value={input.description}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {/* create collection list  */}
      <CreateCollection getCreateCollection={getCreateCollection} />

      {/* select list like properties stats levels etc  */}
      <SelectList childInputValues={childInputValues} />

      {/* supply   items*/}
      <div className="supply">
        <form className={Styles.form}>
          <div className="mt-5">
            <label className="mb-3">supply</label> <br />
            <input
              style={{ width: "100%" }}
              type="number"
              name="name"
              value={supply}
              onChange={handleSupply}
              required
            />
          </div>
        </form>

        {/* supply   items end*/}

        {/* block chain  select field */}
        <section className="mt-5">
          <Select
            defaultInputValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="select block chain"
            styles={customStyles}
            getOptionLabel={(e) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                className={Styles.select_options}
              >
                {e.icon}
                <span style={{ marginLeft: 5 }}>{e.value}</span>
              </div>
            )}
          />
        </section>

        {/* freez meta data section  */}
        <section>
          <div className="mt-4">
            <div className={` mt-2 ${Styles.free_data_text_box}`}>
              <h4>Freeze metadata</h4>
              <p>
                Freezing your metadata will allow you to permanently lock and
                store all of this item's content in decentralized file storage.
              </p>

              <div className={Styles.freez_note}>
                <h6>
                  To freeze your metadata, you must create your item first.
                </h6>
              </div>
            </div>
          </div>
        </section>
        <hr />

        <div className="mt-5">
          <button
            onClick={handleSubmit}
            className="btn btn-primary text-capitalize  btn-lg "
            disabled={disable}
          >
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
