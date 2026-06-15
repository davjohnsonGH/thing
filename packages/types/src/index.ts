export const USER_ROLES = [
  "admin",
  "manager",
  "member"
] as const;

export type UserRole =
  (typeof USER_ROLES)[number];

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}
