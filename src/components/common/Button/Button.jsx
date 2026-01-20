import styles from './Button.module.css';

/**
 * Reusable Button
 * - variant: primary | secondary | outline | ghost | danger
 * - size: sm | md | lg
 * - as: "button" | "a" (or any element)
 * - loading: disables + shows spinner
 * - leftIcon/rightIcon: pass an icon component or element
 */

const Button = ({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    disabled = false,    
    rightIcon,
    className = "",
    as: Component = "button",
    type = "button",
    ...props 
}) => {

const isDisabled = disabled || loading;
    
const classes = [
    styles.btn,
    styles.children,
    styles[`variant_${variant}`],
    styles[`size_${size}`],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    disabled ? styles.disabled : "",    
    className
].filter(Boolean).join(' ');

  // If rendered as <a>, remove invalid button props
  const sharedProps =
    Component === "button"
      ? { type, disabled: isDisabled }
      : { "aria-disabled": isDisabled, role: "button", tabIndex: isDisabled ? -1 : 0 };

    return (
        <>
            <Component className={classes} {...sharedProps} {...props}>
            {loading ? <span className={styles.spinner} /> : null}
            {children}
            {rightIcon ? <span className={`material-symbols-outlined ${styles.iconRight}`}aria-hidden="true">chevron_right</span> : null}
            </Component>
        </>
    )
}

export default Button;