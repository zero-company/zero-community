import { z } from 'zod'

export const createZeroIndexV1Zod = <T extends z.ZodTypeAny>(ValuesZod: T) => {
	return z.object({
		// Universally unique zero-id, prefix zerox-xxxxxx, generated and reserved on server side
		zeroId: z.string(),
		// Valid ZeroTypeVx
		zeroType: z.string(),
		// Optional valid VersionTypeVx zero-id
		versionId: z.optional(z.string()),
		// Optional valid TagTypeVx zero-ids or string
		tagsId: z.optional(z.array(z.string())),
		// Required UserTypeVx zero-id
		ownerId: z.string(),
		// Optional UserTypeVx zero-ids
		accessUpdateId: z.optional(z.array(z.string())),
		// Optional UserTypeVx zero-ids
		accessFetchId: z.optional(z.array(z.string())),
		// Required name
		name: z.string(),
		// Optional description
		description: z.optional(z.string()),
		// Required value
		values: ValuesZod,
		// Used by cleaning purge bot
		expirationDate: z.optional(z.date()),
	})
}

export const ZeroIndexV1Zod = createZeroIndexV1Zod(z.any())
export type ZeroIndexV1Type<T = any> = Omit<
	z.infer<typeof ZeroIndexV1Zod>,
	'values'
> & {
	values: T
}
