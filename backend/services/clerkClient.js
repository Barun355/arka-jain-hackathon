import { Clerk } from '@clerk/clerk-js'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const clerk = new Clerk(publishableKey)
await clerk.load({
  // Set load options here
})