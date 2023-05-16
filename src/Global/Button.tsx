
import "../Styles/Button.css"
import 'antd/dist/antd.css';
import {Button, ButtonProps} from "antd";

type Props = ButtonProps & {
    className?: string;
  };

const Buttons: React.FC<Props> = ({ children, className, onClick, type }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`${className}`}
    >
     {children}
    </Button>
  );
};

export default Buttons;
