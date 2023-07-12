import Alert from "../components/Alert";
import {
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";

const Alerts = () => {
  return (
    <div id="alerts">
      <h2 className="font-medium text-3xl mb-3">Alerts</h2>

      <div className="flex flex-col gap-3">
        <span className="text-sm">Info Alert</span>
        <Alert bgColor="info">Something changed</Alert>

        <span className="text-sm">Warning Alert</span>
        <Alert bgColor="warning">Invalid email address</Alert>

        <span className="text-sm">Success Alert</span>
        <Alert bgColor="success">Order confirmed</Alert>

        <span className="text-sm">Error Alert</span>
        <Alert bgColor="error">Order failed</Alert>

        <h2 className="font-medium">Alert With Icon</h2>

        <span className="text-sm">Info Alert</span>
        <Alert bgColor="info">
          <AiOutlineInfoCircle className="text-lg" />
          Something changed
        </Alert>

        <span className="text-sm">Warning Alert</span>
        <Alert bgColor="warning">
          <AiOutlineWarning className="text-lg" />
          Invalid email address
        </Alert>

        <span className="text-sm">Success Alert</span>
        <Alert bgColor="success">
          <AiOutlineCheckCircle className="text-lg" />
          Order confirmed
        </Alert>

        <span className="text-sm">Error Alert</span>
        <Alert bgColor="error">
          <MdOutlineDangerous className="text-lg" />
          Order failed
        </Alert>
      </div>
    </div>
  );
};

export default Alerts;
