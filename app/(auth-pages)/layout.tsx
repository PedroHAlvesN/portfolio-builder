export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full gap-[200px] flex justify-center items-center px-[182px] bg-[url(/background-auth.png)]">
      <div>
        <h1 className="flex flex-col text-white text-[50px] leading-[60px] w-fit mb-[32px]">
          <img src="/logo.png" alt="" className="w-[60px] h-[60px] mx-auto mb-[32px]" />
          Create your own portfolio <b className="text-[--blue]">full customized!</b>
        </h1>
        <span className="flex text-white text-2xl text-[--text-muted] font-light w-[650px]">
          Drag and drop customized cards into your portfolio 
          and export it in different extensions.
        </span>
      </div>
      {children}
    </main>
  );
}
