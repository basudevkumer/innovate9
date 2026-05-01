const Button = ({ className, buttonName }) => {
  return (
    <div>
      <a
        href="#"
        // Important: make buttons scale nicely on small screens (no fixed padding/font)
        className={`font-dmsans font-semibold text-[14px] sm:text-[16px] lg:text-[18px] leading-[200%] py-3 sm:py-4 px-5 sm:px-8 lg:px-12 bg-quaternary rounded-lg inline-block ${className}`}
      >
        {buttonName}
      </a>
    </div>
  );
};
export default Button;
