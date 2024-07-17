import { z } from 'zod'   

export const Message = z.object({
    acceptMessage: z.string().min(2, { message: "content must be of more than 2 characters" })
        .max(400, { message: "content must be of under 400 characters" }),
    
})