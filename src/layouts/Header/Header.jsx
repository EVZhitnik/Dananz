import './Header.scss';
import Logo from '@/components/Logo';
import clsx from 'clsx';
import Button from '@/components/Button';
import BurgerButton from '@/components/BurgerButton';

export default (props) => {
  const {
    url,
  } = props;

  const headerData = [
    {
      title: 'Home',
      href: './',
    },
    {
      title: 'About Us',
      href: './about',
    },
    {
      title: 'Services',
      href: './services',
    },
    {
      title: 'Our Teams',
      href: './teams',
    },
  ];

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog="">
          <div className="header__body">
            <nav className="header__menu">
              <ul className="header__menu-list">
                {headerData.map(({ title, href }, index) => (
                  <li className="header__menu-item" key={index}>
                    <a 
                      className={clsx("header__menu-link", {'is-active': href === '.' + url})} 
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button 
              className="header__contact-button"
              href="./contact"
              label="Contact Us"
            />
          </div>
        </dialog>
        <BurgerButton 
          className="header__burger-button visible-mobile" 
          extraAttrs ={{
            'data-js-overlay-menu-burger-button': ''
        }}/>
      </div>
    </header>
  );
};
