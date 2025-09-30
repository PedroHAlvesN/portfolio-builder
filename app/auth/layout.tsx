"use client"

import { usePathname } from "next/navigation";

export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const urlPathName = usePathname()
  return (
    <main  className="flex items-center justify-center gap-[164px] w-full h-full bg-[url(/background-auth.png)]">
        { urlPathName != "/auth/forgot-password" &&
            <div className="w-fit">
                <h1 className="flex flex-col text-5xl leading-[48px] border-b-[1px] pb-[32px] mb-[32px]">
                    <img src="/logo.png" alt="site logo" className="w-[90px] h-[90px] mb-[60px] self-center" />
                    Create your own portfolio <b className="text-[--text-blue]">full customized!</b>
                </h1>
                <p className="w-[550px] text-2xl text-[--text-gray] font-light">
                    Drag and drop customized cards into your portfolio and export it in different extensions.
                </p>
            </div>
        }
        {children}
    </main>
  );
}
