import Link from "next/link";

interface NetworkBannerProps {
  user?: {
    name?: string | null;
  } | null;
  loginUrl?: string;
  accountUrl?: string;
}

export function NetworkBanner({
  user = null,
  loginUrl = "/api/auth/signin",
  accountUrl = "/cuenta",
}: NetworkBannerProps) {
  return (
    <header className="darkeraccent" data-theme="dark">
      <nav className="container breakout" aria-label="Red Natrium">
        <ul>
          <li>
            <Link className="contrast" href="https://supermiso.com/natrium">
              <i className="fa-solid fa-circle-nodes"></i> Red Natrium
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              className="contrast"
              href={user ? accountUrl : loginUrl}
              prefetch={false}
            >
              {user ? user.name || "Mi cuenta" : "Iniciar sesión"}
              {" "}
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}