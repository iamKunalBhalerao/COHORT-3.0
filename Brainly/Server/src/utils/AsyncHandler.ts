export default function AsyncHandler(controller: any) {
  return (req: any, res: any, next: any) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  };
}
