import { z } from 'zod'

export const ZeroUserV1Zod = z.object({
	email: z.string(),
	emailVerified: z.date(),
	userName: z.string(),
	fullName: z.object({
		firstName: z.string(),
		secondName: z.string(),
		middleName: z.string(),
		lastName: z.string(),
	}),
	sex: z.optional(z.enum(['male', 'female'])),
})
