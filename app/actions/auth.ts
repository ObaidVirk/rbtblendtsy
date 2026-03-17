"use server";

export async function validateAdminCredentials(
  email: string,
  password: string
): Promise<{ success: boolean }> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return { success: false };
  }

  const isValid = email === adminEmail && password === adminPassword;
  return { success: isValid };
}
