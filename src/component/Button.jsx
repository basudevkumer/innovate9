const Button = ({ className, buttonName }) => {
  return (
    <div>
      <a
        href="#"
        className={`font-dmsans font-semibold text-[18px]/[20px] text-primary leading-[200%] py-[20px] px-[48px] bg-quaternary rounded-lg  inline-block   ${className}`}
      >
        {buttonName}
      </a>
    </div>
  );
};
export default Button;
