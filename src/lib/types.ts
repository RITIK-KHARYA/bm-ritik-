import z from "zod";
export const SignUpSchema = z.object({
    firstName : z.string().min(2),
    lastName : z.string().min(2),
    email :z.string().email({message: "Invalid email"}),
    password : z.string().min(8),
    confirmPassword : z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const SignInSchema = z.object({
    email :z.string().email({message: "Invalid email"}),
    password : z.string().min(8),
})

export const CreateBookmarkSchema = z.object({
    name : z.string().min(2),
    description : z.string().min(1).optional(),
    url : z.string().url({message: "Invalid url"}),
    thumbnail : z.string().url({message: "Invalid url"}),
    userId : z.string({message: "userId is required"}),
    spaceId : z.string().optional(),
})

export type CreateBookmark = z.infer<typeof CreateBookmarkSchema>;