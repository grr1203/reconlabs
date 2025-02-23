import View3D from "@egjs/view3d";
import { useEffect, useRef, useState } from "react";
import style from "../assets/css/ModelViewer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import viewerGuide from "../assets/img/modal.png";

function ModelViewer() {
  const viewerRef = useRef();
  const [modal, setModal] = useState(false);
  const models = ["Chair", "Cube", "Mixer", "ToyCar"];
  const [model] = useState(models[Math.floor(Math.random() * models.length)]);

  useEffect(() => {
    new View3D(viewerRef.current, {
      src: `/model/${model}.glb`,
      envmap: "/model/geislingen_an_der_steige_4k.hdr",
    });
  }, [viewerRef, model]);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className={style.viewerContainer}>
      <div className={style.viewer}>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className={style.modalButton}
          onClick={openModal}
        />
        <div ref={viewerRef}>
          <canvas></canvas>
        </div>
        <div className={style.optionBox}>
          <label htmlFor="option1">Show Dimensions:</label>
          <input id="option1" type="checkbox" />
          <br />
          <label htmlFor="option2">HDR Lighting:</label>
          <input id="option2" type="checkbox" />
        </div>
        <button className={style.copyButton} onClick={handleCopyURL}>
          코드 복사하기
        </button>
      </div>
      <ViewerGuideModal open={modal} handleClose={closeModal} />
    </div>
  );
}

function ViewerGuideModal({ open, handleClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={`${style.modal} ${open ? style.visible : ""}`}
      onClick={handleClose}
    >
      <img src={viewerGuide} alt="guide" />
    </div>
  );
}

export default ModelViewer;
