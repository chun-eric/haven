// takes two parameters, src and ...rest
export default function Image ({ src, ...rest }) {
  src =
    // if src exists and contains https://
    // keep original src
    // else use http://localhost:3000/uploads/ as the src
    src && src.includes('https://')
      ? src
      : `http://localhost:3000/uploads/${src}`
  return <img {...rest} src={src} />
}
