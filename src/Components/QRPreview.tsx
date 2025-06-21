
interface QRPreviewProps {
  qrRef: React.RefObject<HTMLDivElement | null>;
}

const QRPreview: React.FC<QRPreviewProps> = ({ qrRef }) => (
  <div className="mb-6">
    <div className="p-4 border-2 border-dotted border-white rounded-xl">
      <div
        ref={qrRef}
        className="w-64 h-64 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center"
      >
        <span className="text-gray-500">QR Preview</span>
      </div>
    </div>
  </div>
);

export default QRPreview;
