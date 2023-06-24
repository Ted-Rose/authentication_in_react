import { Link } from "react-router-dom";

const PasswordForm = () => {
  return (
    <div>
      <div>PasswordForm</div>
      <Link to="/TeamPoints">
        <span className="font-medium text-gray-800 ml-1">TeamPoints</span>
      </Link>
      <Link to="/Trading">
        <span className="font-medium text-gray-800 ml-1">Trading</span>
      </Link>
    </div>
  );
};

export default PasswordForm;
