import type { DotType } from '../helpers/types';

interface QRSettingsFormProps {
  text: string;
  dotStyle: DotType;
  dotColor: string;
  bgColor: string;
  logoMargin: number;
  handleLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setText: (text: string) => void;
  setDotStyle: (style: DotType) => void;
  setDotColor: (color: string) => void;
  setBgColor: (color: string) => void;
  setLogoMargin: (value: number) => void;
  handleGenerate: () => void;
}

const QRSettingsForm: React.FC<QRSettingsFormProps> = ({
  text,
  dotStyle,
  dotColor,
  bgColor,
  logoMargin,
  handleLogoChange,
  setText,
  setDotStyle,
  setDotColor,
  setBgColor,
  setLogoMargin,
  handleGenerate,
}) => (
  <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block mb-1 text-sm text-gray-300">Text or URL</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Enter content"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">Dot Style</label>
        <select
          onChange={(e) => setDotStyle(e.target.value as DotType)}
          value={dotStyle}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
        >
          <option value="square">Square</option>
          <option value="dots">Dots</option>
          <option value="rounded">Rounded</option>
          <option value="extra-rounded">Extra Rounded</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">Dot Color</label>
        <input
          onChange={(e) => setDotColor(e.target.value)}
          value={dotColor}
          type="color"
          className="w-full h-10 rounded bg-gray-800 border border-gray-600"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">Background Color</label>
        <input
          onChange={(e) => setBgColor(e.target.value)}
          value={bgColor}
          type="color"
          className="w-full h-10 rounded bg-gray-800 border border-gray-600"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">Logo (optional)</label>
        <input
          onChange={handleLogoChange}
          type="file"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-gray-300"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">Logo Margin</label>
        <input
          onChange={(e) => setLogoMargin(Number(e.target.value))}
          value={logoMargin}
          type="number"
          min="0"
          max="50"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
        />
      </div>
    </div>

    <div className="mt-6">
      <button
        onClick={handleGenerate}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Generate QR Code
      </button>
    </div>
  </div>
);

export default QRSettingsForm;
