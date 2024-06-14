declare module "*.png";
declare module "*.jpg";
declare module "*.mp4" {
  const src: string;
  export default src;
}
//эти объявления модулей позволяют TypeScript правильно распознавать и обрабатывать
// файлы изображений и видео при их импорте в проекте
