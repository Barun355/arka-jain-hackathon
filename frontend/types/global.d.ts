export {}


declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean,
      role?: "mentor" | "mentee" | "admin",
    }
  }
}