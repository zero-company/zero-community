import { z } from 'zod'

export const ZeroUserV1 = z.object({
	email: z.string(),
	emailVerified: z.date(),
	name: z.string(),
	fullName: z.object({
		firstName: z.string(),
		secondName: z.string(),
		middleName: z.string(),
		lastName: z.string(),
	}),
	sex: z.optional(z.enum(['male', 'female'])),
})
