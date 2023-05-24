
import "./Button.css"
import 'antd/dist/antd.css';
import { Button, ButtonProps} from "antd";

type Props = ButtonProps & {
    className?: string;
  };

const Buttons: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`${className}`}
    >
     {children}
    </Button>
  );
};

export default Buttons;
