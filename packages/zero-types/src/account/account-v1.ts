import { z } from 'zod'

export const AccountV1ZodValues = {
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
}

export const AccountV1Zod = z.object({
	id: z.string(),
	...AccountV1ZodValues,
})
