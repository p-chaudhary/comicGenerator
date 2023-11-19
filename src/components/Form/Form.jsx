import React, { useState } from "react";
import styles from "./Form.module.css";
import { Panel, PrimaryButton, SecondaryButton, TextArea } from "..";
import { generator } from "@/handler/form";



const Form = () => {
  const [prompts, setPrompts] = useState("");

  const [showPanel, setShowPanel] = useState(false);

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = ( value) => {
    
    setPrompts(value);
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setShowPanel(true);
      const res = await generator(prompts);
      setImages(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowPanel(false);
    }
  };

  return (
    <>
      {!showPanel && !loading && (
        <div className={styles.container}>
          <h2>Dashtoon Comic Strips</h2>

          
              <TextArea
                label= "My input"
                
                onChange={(e) => {
                  handleChange( e.target.value);
                }}
              />

            
          

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "12px",
              alignSelf: "flex-end",
            }}
          >
            {/* <SecondaryButton
              title="Clear Strips"
              onClick={() => {
                setPrompts(Initial_Prompts);
              }}
            /> */}
            <PrimaryButton
              title="Generate Comic Strips"
              onClick={handleGenerate}
            />
          </div>
        </div>
      )}

      {loading && (
        <div className={styles.loader}>
          <img src="/gif1.gif" />
        </div>
      )}

      {showPanel && !loading && (
        <>
          <img
            className={styles.close}
            src="/cross.svg"
            onClick={() => {
              setShowPanel(false);
            }}
          />
          <Panel images={images} />
        </>
      )}
    </>
  );
};

export default Form;
