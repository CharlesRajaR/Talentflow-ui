"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface AuthState {
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    password?: string;
  };
}

export async function registerAction(
  prevState: AuthState | null,
  formData: FormData
): Promise<AuthState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  // Basic validation
  if (!name || !email || !password) {
    return { error: "All fields are required." };
  }

  if (password.length < 6) {
    return {
      fieldErrors: { password: "Password must be at least 6 characters long." },
    };
  }

  try {
    // 1. Check if user already exists in DB
    // e.g., const existing = await db.user.findUnique({ where: { email } });
    // if (existing) return { error: "Email already in use." };

    // 2. Hash password & insert into DB
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await db.user.create({ data: { name, email, password: hashedPassword } });

    // 3. Set a session / auth cookie
    const cookieStore = await cookies();
    cookieStore.set("session_token", "sample_secure_session_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }

  // Redirect to jobs browsing page upon success
  redirect("/jobs");
}

export async function loginAction(
  prevState: AuthState | null,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { error: "Please enter both email and password." };
  }

  try {
    // 1. Fetch user by email
    // const user = await db.user.findUnique({ where: { email } });
    // if (!user) return { error: "Invalid credentials." };

    // 2. Compare password
    // const isValid = await bcrypt.compare(password, user.password);
    // if (!isValid) return { error: "Invalid credentials." };

    // Mock credential check for demo
    if (email === "test@example.com" && password !== "password123") {
      return { error: "Invalid email or password." };
    }

    // 3. Set session cookie
    const cookieStore = await cookies();
    cookieStore.set("session_token", "sample_secure_session_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }

  redirect("/jobs");
}