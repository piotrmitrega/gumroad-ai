declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.webp' {
  const imagePath: string;
  export default imagePath;
}

declare module '*.png' {
  const imagePath: string;
  export default imagePath;
}
