import z from "zod";
export const SignUpSchema = z.object({
    firstName : z.string().min(2),
    lastName : z.string().min(2),
    email :z.string().email({message: "Invalid email"}),
    password : z.string().min(8),
    confirmPassword : z.string().min(8),
    image : z.string().min(1),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const SignInSchema = z.object({
    email :z.string().email({message: "Invalid email"}),
    password : z.string().min(8),
})