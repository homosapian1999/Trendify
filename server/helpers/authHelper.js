import bcrypt from "bcrypt";

export const hashPassword = async (passswod) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passswod, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.log(err);
  }
};

export const comparePassword = async (passswod, hashedPassword) => {
  return await bcrypt.compare(passswod, hashedPassword);
};
