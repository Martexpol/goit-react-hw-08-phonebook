import { Helmet, HelmetProvider } from "react-helmet-async";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegistrationForm />
      </div>
    </HelmetProvider>
  );
}
