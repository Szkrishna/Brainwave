import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, children, px, white, onClick }) => {
    console.log('Button Props:', { className, px });
    const classes = `button relative infinite-flex item-center justify-center h-11 transition-colors
    hover: text-color-1 ${px || 'px-7'} ${white ? 'text-n-1' : 'text-n-8'} ${className || ''}`;

    const spanClasses = `relative z-10 text-slate-200 mt-2 hover:text-color-1 `

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg (white)}
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

