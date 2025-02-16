const Address = require("../models/Address");

const addresses = [
  {
    _id: "65c26398e1e1a2106ac8fbd5",
    user: "65b8e564ea5ce114184ccb96",
    street: "123 main street",
    city: "Nairobi",
    state: "kenya",
    phoneNumber: "0712345678",
    postalCode: "201012",
    country: "Kenya",
    type: "Home",
    __v: 0,
  },
  {
    _id: "65c26412e1e1a2106ac8fbd8",
    user: "65b8e564ea5ce114184ccb96",
    street: "main 18th",
    city: "Kampala",
    state: "Uganda",
    phoneNumber: "0712345679",
    postalCode: "301273",
    country: "Uganda",
    type: "Business",
    __v: 0,
  },
];

exports.seedAddress = async () => {
  try {
    await Address.insertMany(addresses);
    console.log("Address seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
