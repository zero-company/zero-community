import { z } from 'zod'

export const ZeroAccountV1Zod = z.object({
	email: z.string(),
	emailVerified: z.optional(z.date()),
	userName: z.string(),
	fullName: z.optional(
		z.object({
			firstName: z.optional(z.string()),
			secondName: z.optional(z.string()),
			middleName: z.optional(z.string()),
			lastName: z.optional(z.string()),
		}),
	),
	sex: z.optional(z.enum(['male', 'female'])),
	passwordHash: z.string(),
})
