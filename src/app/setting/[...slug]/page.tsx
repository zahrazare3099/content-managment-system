const SettingTest = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  return (
    <div className="flex flex-col gap-y-5 p-8">
      <h1 className="font-bold text-xl">Test catch all segment</h1>
      {slug?.length === 1 && (
        <h2 className="bg-green-300">viewing docs for Feature {slug[0]}</h2>
      )}
      {slug?.length === 2 && (
        <div className="flex flex-col gap-y-2 p-2 bg-amber-200">
          <h2>viewing docs for Feature {slug[0]}</h2>
          <h3>concept {slug[1]}</h3>
        </div>
      )}
      {slug?.length === 3 && (
        <div className="flex flex-col gap-y-2 p-2 bg-purple-300">
          <h2>viewing docs for Feature {slug[0]}</h2>
          <h3>concept {slug[1]}</h3>
          <p>secend segmant item {slug[2]}</p>
        </div>
      )}
    </div>
  );
};

export default SettingTest;
