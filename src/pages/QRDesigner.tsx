import QRCodeStyling from "qr-code-styling"
import { useEffect, useRef, useState } from "react"
import { toast, ToastContainer } from 'react-toastify'

import QRTitle from "../Components/QRTitle";
import QRPreview from "../Components/QRPreview";
import QRDownloadSection from "../Components/QRDownloadSection";
import QRSettingsForm from "../Components/QRSettingsForm";

import type { DotType, DownloadType } from "../helpers/types";
import { isLowContrast } from "../helpers/qrHelpers";


const QRDesigner: React.FC = () => {

  const qrRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("")
  const [dotStyle, setDotStyle] = useState<DotType>("square")
  const [dotColor, setDotColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [logo, setLogo] = useState<string | null>(null)
  const [logoMargin, setLogoMargin] = useState(10)
  const [download, setDownload] = useState<DownloadType>("png")

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result as string); 
      };
      reader.readAsDataURL(file);
    }
  };


  const qrCode = useRef(

    new QRCodeStyling({
      width: 300,
      height: 300,
      data: text,
      dotsOptions: {
        color: dotColor,
        type: dotStyle
      },
      backgroundOptions: {
        color: bgColor
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: logoMargin
      }
    })

  ).current

  useEffect(() => {
    if (qrRef.current) {
      qrCode.append(qrRef.current);
    }
  }, []);



  const handleGenerate = () => {

    if (isLowContrast(dotColor, bgColor)) {
      toast.error("Oops! The colors might make your QR code hard to scan. Please use a darker dot color or lighter background.");
      return;
    }

    console.log(dotStyle)

    qrCode.update({
      width: 300,
      height: 300,
      data: text,
      dotsOptions: {
        color: dotColor,
        type: dotStyle
      },
      backgroundOptions: {
        color: bgColor
      },
      image: logo || undefined,
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: logoMargin
      }
    })
  }

  const handleDownload = () => {
    if (text.trim() === '') {
      toast.error('Please generate a QR code before downloading.');
      return;
    }

    qrCode.download({
      name: "custom-qr",
      extension: download,
    });
  };


  return (
     <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-start py-10 px-4">
      <ToastContainer position="top-right" autoClose={3000} />

      <QRTitle />
      <QRPreview qrRef={qrRef} />
      <QRDownloadSection
        download={download}
        setDownload={setDownload}
        handleDownload={handleDownload}
      />
      <QRSettingsForm
        text={text}
        setText={setText}
        dotStyle={dotStyle}
        setDotStyle={setDotStyle}
        dotColor={dotColor}
        setDotColor={setDotColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
        logoMargin={logoMargin}
        setLogoMargin={setLogoMargin}
        handleGenerate={handleGenerate}
        handleLogoChange={handleLogoChange}
      />

      <footer className="mt-10 text-sm text-gray-500">© 2025 QR made smarter.</footer>
    </div>
  )
}

export default QRDesigner
