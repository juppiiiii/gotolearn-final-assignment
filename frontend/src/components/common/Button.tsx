interface ButtonProps {
    onClick: () => void;
    text: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
      <button
        onClick={onClick}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
      >
        {text}
      </button>
    );
  };
  
  export default Button;