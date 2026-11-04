const EMAIL_PRO = "";
const email = EMAIL_PRO.trim() || "borisdossa1973@gmail.com";
const phone = "+2290153835553";

export const contactInfo = {
  email,
  emailHref: `mailto:${email}`,
  phone,
  phoneDisplay: "+229 01 53 83 55 53",
  telephoneHref: `tel:${phone}`,
  whatsappHref: `https://wa.me/${phone.replace("+", "")}`,
};
