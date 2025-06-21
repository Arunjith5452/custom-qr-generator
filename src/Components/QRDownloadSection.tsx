import React from 'react';
import type { DownloadType } from '../helpers/types';

interface Props {
  download: DownloadType;
  setDownload: (type: DownloadType) => void;
  handleDownload: () => void;
}

const QRDownloadSection: React.FC<Props> = ({ download, setDownload, handleDownload }) => (
  <div className="flex items-center gap-4 mb-6">
    <select
      value={download}
      onChange={(e) => setDownload(e.target.value as DownloadType)}
      className="px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white"
    >
      {(['png', 'jpeg', 'webp', 'svg'] as DownloadType[]).map((type) => (
        <option key={type} value={type}>
          {type.toUpperCase()}
        </option>
      ))}
    </select>

    <button
      onClick={handleDownload}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition"
    >
      Download
    </button>
  </div>
);

export default QRDownloadSection;