import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

export function Header({ title, children }: HeaderProps) {
  return (
    <header className="accent" data-theme="dark">
      <header className="container">
        <nav>
          <big>
            <a href="/">
              <big>
                {title}
              </big>
            </a>
          </big>
          <ul>
            <li className="sitenav">
              {children}
            </li>
          </ul>
        </nav>
      </header>
    </header>
  );
}
