import crypto from "crypto";

export const generateGravatar = async (email: string, size = 200) => {
  if (!email) return null;

  const normalizedEmail = email.trim().toLowerCase();

  const hash = crypto.createHash("md5").update(normalizedEmail).digest("hex");

  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
};
