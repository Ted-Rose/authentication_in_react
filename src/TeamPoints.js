import { Link } from "react-router-dom";

const TeamPoints = () => {
  return (
    <div>
      <div>TeamPoints</div>
      <Link to="/PasswordForm">
        <span className="font-medium text-gray-800 ml-1">PasswordForm</span>
      </Link>
      <Link to="/Trading">
        <span className="font-medium text-gray-800 ml-1">Trading</span>
      </Link>
    </div>
  );
};

export default TeamPoints;
