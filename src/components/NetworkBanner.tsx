"use client";
import { signIn, useSession } from "next-auth/react";


export function NetworkBanner() {
  const { data: session, status } = useSession();
  return (
      <header className="darkeraccent">
        <nav className="container breakout" aria-label="breadcrumb">
          <ul>
            <li>
              <a className="secondary" href="https://16w.eu/natrium">
                <i className="fa-solid fa-circle-nodes"></i> Red Natrium
              </a>
            </li>
          </ul>
          {status == "authenticated" ?
            <ul>
                <li>
                <a className="secondary" href="/cuenta">
                    {session?.user?.name}
                    <i className="fa-solid fa-user"></i>
                </a>
                </li>
            </ul>
            :
            <ul>
                <li>
                <a className="secondary" onClick={() => signIn("authentik")}>
                    Iniciar sesión
                    <i className="fa-solid fa-user"></i>
                </a>
                </li>
            </ul>
          }
        </nav>
      </header>
  );
}