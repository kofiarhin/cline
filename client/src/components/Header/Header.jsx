import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from '../../lib/reactRedux.js';
import { selectMeta, selectNavigation } from '../../store/slices/contentSlice.js';
import NavigationMenu from '../NavigationMenu/NavigationMenu.jsx';
import SideDrawer from '../SideDrawer/SideDrawer.jsx';
import styles from './header.styles.scss?module';

const Header = () => {
  const navigation = useSelector(selectNavigation);
  const meta = useSelector(selectMeta);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const drawerId = 'primary-navigation-drawer';

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen((previous) => !previous);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <span className={styles.logo}>LuxeAura</span>
        <span className={styles.tagline}>{meta.tagline}</span>
      </div>
      <NavigationMenu items={navigation} className={styles.desktopNav} />
      <button
        type="button"
        className={[styles.menuButton, isDrawerOpen ? styles.menuButtonOpen : '']
          .filter(Boolean)
          .join(' ')}
        aria-label="Toggle navigation"
        aria-controls={drawerId}
        aria-expanded={isDrawerOpen}
        onClick={toggleDrawer}
      >
        <span className={styles.menuIcon} />
      </button>
      <SideDrawer id={drawerId} isOpen={isDrawerOpen} onClose={closeDrawer} title="Navigation">
        <NavigationMenu items={navigation} variant="vertical" onNavigate={closeDrawer} />
      </SideDrawer>
    </header>
  );
};

export default Header;
