import {z} from 'zod';


export const usernameValidation =z
    .string()
    .min(2,"username must be greater than 2 words")
    .max(20,"username must be less than 20 words")
    .regex(/^[a-zA-Z0-9]+$/, "username must only contain letters and numbers")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6, {message:"password must be at least 6 characters"}),

})

