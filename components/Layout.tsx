import React, {FunctionComponent, ReactElement} from 'react';
import PersonaSelector from './PersonaSelector';

type Props = {
	children?: ReactElement
};

const Layout: FunctionComponent<Props> = ({children}): ReactElement => (
    <div className="container">
        <header className="header">
            <a href="https://croct.com" className="logo">
                <img src="/logo.svg" title="Croct" alt="Croct" />
            </a>
            <PersonaSelector />
        </header>
        <div className="content">
            {children}
        </div>
    </div>
);

export default Layout;
