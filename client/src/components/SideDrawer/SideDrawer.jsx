import { useEffect } from 'react';
import styles from './sideDrawer.styles.scss?module';

const SideDrawer = ({ id, isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const headingId = id ? `${id}-title` : undefined;

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={onClose} role="presentation" />
      <aside
        id={id}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
      >
        <div className={styles.drawerHeader}>
          <span id={headingId} className={styles.title}>
            {title}
          </span>
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close navigation">
            <span className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </aside>
    </div>
  );
};

export default SideDrawer;
