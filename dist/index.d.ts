import * as react from 'react';
import { ReactNode } from 'react';

declare function NetworkBanner(): react.JSX.Element;

interface HeaderProps {
    title: string;
    children?: ReactNode;
}
declare function Header({ title, children }: HeaderProps): react.JSX.Element;

export { Header, NetworkBanner };
