import React,{useRef,useState,useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdCloudUpload } from "react-icons/md";
import CreateForm from "../components/createForm";
import Styles from "../styles/create.module.scss";
const Create = () => {
  const [image,setImage]=useState()
  const [preview,setPreview]=useState('')



  const fileUploadRef=useRef();
  
   useEffect(()=>{
       if(image){
           const reader = new FileReader()
           reader.onloadend = ()=>{
               setPreview(reader.result)
           }
            reader.readAsDataURL(image)
       }
       else{
           setPreview(null)
       }
   },[image])


  const getFileHandler=(e)=>{
        const file=e.target.files[0]
        if(file && file.type.substr(0,5)){
          setImage(file)
        }
        else{
          setImage(null)
        }
        
  }

  
  const vedioUploder=(e)=>{
    const file=e.target.files[0]
    if(file && file.type.substr(0,5)){
      setImage(file)
    }
    else{
      setImage(null)
    }
    
}

  



  const uploadHandler=()=>{
       fileUploadRef.current.click()
  }
  return (
    <>
       
      <section className={Styles.create_section}>

        <Container>
          <Row className="mt-5 pt-5 d-flex justify-content-center">
            <Col sm={10} md={9}>
              {/* create new item  */}
              <div className="create_content">
                <div className="create_text">
                  <h1 className="text-capitalize fw-bold mb-3">
                    create new item
                  </h1>
                  <p style={{fontSize:"13px"}} className="text-capitalize fs-small">
                    <span className="text-primary">*</span>  required fields
                  </p>

                  <span className="fs-small text-capitalize">
                    image,video,audio,or 3D model {" "}
                    <span className="text-danger"> *</span>
                  </span>
                </div>
                <div className={Styles.file_size_text}>
                  <span>
                    File types supported : JPG, PNG, GIF, SVG, . Max size: 100 MB
                  </span>
                </div>
               {/* uploade img div */}
                <div className={Styles.Upload_img}>
                  <div className={Styles.overlay}  onClick={uploadHandler}>
                    {/* <img /> */}
                   
                      {preview ? <img   src={preview} alt="upload"  onClick={()=>setImage(null)}/> :   <MdCloudUpload />  }
                 
                      <input type="file"  ref={fileUploadRef}  onChange={getFileHandler}  accept="image/*"/>
                  </div>
                      
                </div>
              </div>

              {/* form section component */}
                <CreateForm  setImage={setImage}/>
               {/* form section   component */}
              
            
                
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
