export const isLowContrast = (dotColor: string, bgColor: string): boolean => {
  const getLuminance = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

  const contrast = Math.abs(getLuminance(dotColor) - getLuminance(bgColor));
  return contrast < 50;
};
