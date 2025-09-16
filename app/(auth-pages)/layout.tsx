export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full flex items-center px-[182px] bg-[url(/background-auth.png)]">
      <div>
        <span className="flex flex-col">
          <img src="/logo.png" alt="" className="w-[60px] h-[60px]" />
          Likia
        </span>
        <h1 className="text-4xl font-bold">Conecte-se ao que importa!</h1>
      </div>
      {children}
    </main>
  );
}
