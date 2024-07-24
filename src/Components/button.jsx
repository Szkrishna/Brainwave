import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, children, px, black }) => {
    console.log('Button Props:', { className, px });
    const classes = `button relative infinite-flex item-center justify-center h-11 transition-colors
    hover: text-color-1 ${px || 'px-7'} ${black ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

    const spanClasses = `relative z-10 text-black hover:text-color-1 `

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg (black)}
        </button>
    );

    // const renderLink = () => (
    //     <a href={href} className={classes}>
    //         <span className={spanClasses}>{children}</span>
    //         {ButtonSvg (black)}
    //     </a>
    // );

    // return href ? renderLink() : renderButton();
    return renderButton();
};

export default Button;

