function EllipsisIndicator({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return <p>...</p>;
}

export default EllipsisIndicator
