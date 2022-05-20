import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import style from "../assets/css/QR.module.scss";

function QR() {
  const qrContainerRef = useRef();

  const handleDownloadQR = () => {
    const qrCode = qrContainerRef.current.childNodes.item(1);
    const a = document.createElement("a");
    a.href = qrCode.toDataURL();
    a.download = "QRCode";
    document.body.appendChild(a);
    a.click();
  };

  return (
    <div className={style.qrContainer} ref={qrContainerRef}>
      <h2>스마트폰을 통해 스캔 해주세요.</h2>
      <QRCodeCanvas value="https://plicar.io/" size={180} />
      <div className={style.explain1}>
        <span>스마트폰 기본 카메라 앱에서</span>
        <span>아래의 QR을 비춘 후 뜨는 링크를 눌러주세요</span>
      </div>
      <div className={style.downloadButton} onClick={handleDownloadQR}>
        QR코드 이미지 다운받기
      </div>
      <span className={style.explain2}>
        *AR기능은 현재 아래의 기기에서만 정상 작동 합니다:
      </span>
      <div className={style.explain3}>
        <span>iPhone: iOS 12이상</span>
        <span>Android: 8.0+ 이상 ARCore 1.9 지원기기</span>
      </div>
    </div>
  );
}

export default QR;
