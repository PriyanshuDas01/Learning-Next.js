import { z } from 'zod'   

export const signInSchema = z.object({
    userid: z.string(),
    password: z.string(),
    
})
