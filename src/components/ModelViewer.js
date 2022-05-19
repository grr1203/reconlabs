import View3D from "@egjs/view3d";
import src from "../assets/model/Chair.glb";
import { useEffect, useRef, useState } from "react";
import style from "../assets/css/ModelViewer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import viewerGuide from "../assets/img/modal.png";

function ModelViewer() {
  const viewerRef = useRef();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(viewerRef);
    new View3D(viewerRef.current, {
      src,
      envmap: "../assets/model/geislingen_an_der_steige_4k.hdr",
    });
  }, [viewerRef]);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
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
          <label for="option1">Show Dimensions:</label>
          <input id="option1" type="checkbox" />
          <br />
          <label for="option2">HDR Lighting:</label>
          <input id="option2" type="checkbox" />
        </div>
        <button className={style.copyButton}>코드 복사하기</button>
      </div>
      <ViewerGuideModal open={modal} handleClose={closeModal} />
    </div>
  );
}

function ViewerGuideModal({ open, handleClose }) {
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
