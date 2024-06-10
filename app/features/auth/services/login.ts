import type { LoginDTO } from "~/features/auth/schemas/login";
import type { AuthSession } from "~/features/auth/types/session";

export async function loginWithEmailAndPassword(body: LoginDTO) {
  console.log("Logging in with email and password...");
  console.log("Credentials:", body);

  await new Promise((resolve) => setTimeout(resolve, 1_000));

  const mockResponse: AuthSession = {
    user: {
      name: "John Doe",
    },
  };

  return mockResponse;
}
