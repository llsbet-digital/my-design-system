import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './modal.css';

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="4" x2="16" y2="16" />
    <line x1="16" y1="4" x2="4" y2="16" />
  </svg>
);

export const Modal = ({
  open = false,
  size = 'md',
  title,
  subtitle,
  icon,
  iconVariant = 'default',
  children,
  footer,
  onClose,
  closeOnOverlay = true,
  ...props
}) => {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={closeOnOverlay ? (e) => { if (e.target === e.currentTarget) onClose?.(); } : undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div className={`modal modal--${size}`} {...props}>
        <div className="modal__header">
          <div className="modal__header-text">
            {icon && (
              <span className={`modal__icon modal__icon--${iconVariant}`}>{icon}</span>
            )}
            {title && <h2 id="modal-title" className="modal__title">{title}</h2>}
            {subtitle && <p className="modal__subtitle">{subtitle}</p>}
          </div>
          {onClose && (
            <button className="modal__close" onClick={onClose} aria-label="Close modal">
              <CloseIcon />
            </button>
          )}
        </div>
        {children && <div className="modal__body">{children}</div>}
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  iconVariant: PropTypes.oneOf(['default', 'brand', 'error', 'warning', 'success']),
  children: PropTypes.node,
  footer: PropTypes.node,
  onClose: PropTypes.func,
  closeOnOverlay: PropTypes.bool,
};
