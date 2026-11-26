import z from "zod";
export const registerschema = z.object({
    name: z.string().min(3,"Name must contain atleast 3 letters"),
    email: z.string().email(3,"Enter a valid email"),
    password: z.string().min(8,"Password should be minimum 8 characters")
})