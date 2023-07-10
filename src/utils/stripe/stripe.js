// imports
import { loadStripe } from "@stripe/stripe-js";

// stripe promise
export const stripePromise = loadStripe(
	process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
);
