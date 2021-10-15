export const investitorQuotesText = (statements) => {
  let text = "";
  let nameInvest = "";
  let roleInvest = "";

  if (statements === "/") {
    text =
      "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete";
    nameInvest = "William Mac";
    roleInvest = "CO-FOUNDER, INVESTOR";
  }

  if (statements === "/pages2") {
    text =
      "Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free";
    nameInvest = "Jodie Sears";
    roleInvest = "UNITEDPROPERTIES’ AGENT";
  }

  if (statements === "/pages3") {
    text =
      "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side";
    nameInvest = "Ollie Mcmahon";
    roleInvest = "MANAGING DIRECTOR";
  }

  return { text, nameInvest, roleInvest };
};
