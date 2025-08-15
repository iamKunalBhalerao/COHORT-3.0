export default function folder({
  params,
}: {
  params: {
    folders: string;
  };
}) {
  return <div>{JSON.stringify(params.folders)}</div>;
}
