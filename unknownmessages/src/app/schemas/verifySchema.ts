import { z } from 'zod'   

export const varificationSchema = z.object({
    code: z.string().length(6, 'Code must be of 6 digits'),
    
})
