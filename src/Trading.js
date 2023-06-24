import { Link } from "react-router-dom";

const Trading = () => {
  return (
    <div>
      <div>Trading</div>
      <Link to="/PasswordForm">
        <span className="font-medium text-gray-800 ml-1">PasswordForm</span>
      </Link>
      <Link to="/TeamPoints">
        <span className="font-medium text-gray-800 ml-1">TeamPoints</span>
      </Link>
    </div>
  );
};

export default Trading;
