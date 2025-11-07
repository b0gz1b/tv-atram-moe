const CTAButton = ({children, onClick, variant='red', className='' }) => {
  const baseClasses = 'text-white font-recursive-mono-casual font-bold px-6 py-3 rounded-lg transition shadow-md hover:shadow-ld active:scale-95 focus:outline-none focus:ring-4';
  const variants = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300', 
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-300',
  }
  const classes = `${baseClasses}  ${variants[variant]} ${className}`;
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
export default CTAButton;
