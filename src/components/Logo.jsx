export default function Logo({ width = 38, height = 43 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 50" aria-hidden="true">
      <path d="M13 6 L20 3 L24 13 L28 3 L35 6 L44 22 L40 46 L8 46 L4 22 Z" fill="#080808" />
      <path d="M20 3 L24 13 L28 3" stroke="#C4B9A8" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="21" r="1.1" fill="#C4B9A8" />
      <circle cx="24" cy="28" r="1.1" fill="#C4B9A8" />
    </svg>
  )
}
