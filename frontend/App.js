import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey = "pk_test_51LvOoPSAL0lTP2XoqkDwordMkU7XYQ2xtrvAuhe1Q0FGZkS7vria8Z5pUBi5Qu85frelQcCwqjwd7fjLqV9Murlc0084qhv4zp";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      publishableKey={stripeKey}
      merchantIdentifier={"narender.ca"}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}
