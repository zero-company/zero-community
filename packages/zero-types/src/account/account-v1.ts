import { z } from 'zod'

export const AccountV1Zod = z.object({
	accountId: z.string(),
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
export type AccountV1Type = z.infer<typeof AccountV1Zod>

export const AccountV1ValuesZod = AccountV1Zod.omit({ accountId: true })
export type AccountV1ValuesType = z.infer<typeof AccountV1ValuesZod>
