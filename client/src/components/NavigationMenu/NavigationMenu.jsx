import { NavLink } from 'react-router-dom';
import styles from './navigationMenu.styles.scss?module';

const NavigationMenu = ({ items = [], variant = 'horizontal', onNavigate, className }) => {
  if (!items.length) {
    return null;
  }

  const navClassNames = [
    styles.navigation,
    variant === 'vertical' ? styles.vertical : styles.horizontal,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClassNames} aria-label="Primary navigation">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
          }
          onClick={onNavigate}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationMenu;
