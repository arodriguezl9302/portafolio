// middleware.js

import { NextResponse } from "next/server";
import subdomains from "./subdomains.json";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: any) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  // Se define una lista de dominios permitidos (incluyendo localhost y el dominio real)
  const allowedDomains = ["localhost:3000", "menu.test", "arodriguezl.me"];

  // Verificamos si el hostname actual está en la lista de dominios permitidos
  const isAllowedDomain = allowedDomains.some((domain) => {
    // console.log("domain dentro some: ", domain);
    // console.log("hostanem dentro some: ", hostname);
    return hostname.includes(domain);
  });

  // Extraemos el posible subdominio de la URL
  const domain = hostname.split(".")[1] + "." + hostname.split(".")[2];
  const subdomain = hostname.split(".")[0];

  // console.log("dominio: ", domain);
  // console.log("subdomain: ", subdomain);
  // console.log("pathname: ", url.pathname);
  // console.log("req: ", req.url);
  // console.log("isAllowedDomain: ", isAllowedDomain);

  // Si estamos en un dominio permitido y no es un subdominio, permitimos la solicitud
  if (
    isAllowedDomain &&
    !subdomains.some((d: any) => d.subdomain === subdomain)
  ) {
    if (subdomain != "arodriguezl" || subdomain != "www") {
      const url = new URL(`http://create.arodriguezl.me/?name=${subdomain}`);
      return NextResponse.redirect(url);
    } else {
      return NextResponse.next();
    }
  }

  const subdomainData = subdomains.find((d: any) => d.subdomain === subdomain);

  if (subdomainData) {
    // Reescribe la URL a una ruta dinámica basada en el subdominio
    return NextResponse.rewrite(
      new URL(`/${subdomain}${url.pathname}`, req.url)
    );
  }

  return new Response(null, { status: 404 });
}
