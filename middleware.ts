import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Cria uma resposta para o middleware
  const res = NextResponse.next();
  
  // Cria o cliente Supabase para o middleware
  const supabase = createMiddlewareClient({ req: request, res });

  // Obtém a sessão do usuário
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Lista de rotas que não precisam de autenticação
  const publicPaths = ['/sign-in', '/sign-up', '/forgot-password'];
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // Se o usuário não tem sessão E a rota que ele está tentando acessar não é uma das públicas
  if (!session && !isPublicPath) {
    // Redireciona para a página de login
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/sign-in';
    return NextResponse.redirect(redirectUrl);
  }

  // Se o usuário tem uma sessão E a rota é uma das públicas (ex: login, signup),
  // redireciona-o para a home para evitar que ele acesse a tela de login novamente.
  if (session && isPublicPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  }

  // Atualiza a sessão do Supabase, o que renova o token do usuário.
  // Isso deve ser feito após as verificações para garantir que a sessão
  // esteja sempre fresca para as páginas que forem renderizadas.
  // IMPORTANTE: Isso substitui a função `updateSession` que estava no código original.
  await supabase.auth.getSession();

  return res;
}

export const config = {
  matcher: [
    // O matcher continua o mesmo, ignorando arquivos estáticos e rotas internas.
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};