import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
}

export async function comparePassword(
  inputPassword: string,
  hashedPassword: string,
) {
  try {
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error;
  }
}
