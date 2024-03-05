import { NextRequest, NextResponse } from "next/server"

export default function middleware( request: NextRequest) {
    // Busca e pega o valor do token
    const token = request.cookies.get('auth_token')?.value
    //Rotas
    const login = new URL('/login', request.url)
    const dashboard = new URL('/dashboard', request.url)
    // Se o token não existir
    if (!token) {
        // E se o usuário estiver na rota "/" ou "login"
        if (request.nextUrl.pathname == '/' || request.nextUrl.pathname == '/login') {
            // Prossiga sem encaminhar para rota
            return NextResponse.next()
        }
        // Encaminha o usuário para a rota "login"
        return NextResponse.redirect(login)
    }
    //Se o token existir e o usuário quiser acessar a rota "/" ou "/login"
    if (request.nextUrl.pathname == '/' || request.nextUrl.pathname == '/login') {
        // Encaminhe o usuário para a rota "dashboard"
        return NextResponse.redirect(dashboard)
    }
}

export const config = {
    // Rotas afetadas
    matcher: ['/', '/login', '/dashboard/:path*']
}