const stripeOnramp = StripeOnramp(
    "pk_test_51NuSHBFei5mxrNcIEsj2HLzISUzNpbCqkZBhwk1EJuqJYx45qdL7GnQFaRgX99ZsfgobImJAYyFLTIFtqO8EsqPh00LDbt3qQE"
);
initialize();
// initialize onramp element with client secret
function initialize() {
//   const url = window.location.href.replace(/\/$/, "");
//   const clientSecret = url.substring(url.lastIndexOf("/") + 1);
const onrampSession = stripeOnramp.createSession({
    clientSecret: "cos_1OPgx5Fei5mxrNcI4d4Fbgcz_secret_kVI5pUy2KiyGQeETHkGguRUxY00fSxRkf0d",
    // other client side options that customize the look and feel
});
onrampSession
    .addEventListener("onramp_session_updated", handleSessionUpdate)
    .mount("#onramp-element");
}
function handleSessionUpdate(event) {
const session = event.payload.session;
if (
    session.status === "fulfillment_complete" ||
    session.status === "rejected"
) {
    // redirect back to mobile app via universal link
      window.location.assign("/onramp_success/" + session.id);
    }
  }