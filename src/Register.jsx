import RegisterENSName from "./component/RegisterENSName";
import { configureWeb3Modal } from "./connection";
import Header from "./component/Header";

configureWeb3Modal();

const Register = () => {
  return (
    <div className="p-8">
      <Header />
      <RegisterENSName />
      {/* <a href={`/chat-app`}>Your Name</a> */}
    </div>
  );
};

export default Register;
