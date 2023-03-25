import { z } from 'zod'

export const createZeroIndexZodV1 = <T extends z.ZodTypeAny>(ZeroType: T) => {
	return z.object({
		// Required Universally Unique zero-id, zerox-xxxxxx
		zeroId: z.string(),
		// Required ZeroTypeVx zero-id
		zeroTypeId: z.string(),
		// Optional VersionTypeVx zero-id
		zeroVersionId: z.optional(z.string()),
		// Optional array of TagTypeVx zero-ids or strings
		zeroTags: z.optional(z.array(z.string())),
		// Required UserTypeVx zero-id
		ownerId: z.string(),
		// Optional array of UserTypeVx zero-ids
		accessUpdateId: z.optional(z.array(z.string())),
		// Optional array of UserTypeVx zero-ids
		accessFetchId: z.optional(z.array(z.string())),
		// Required display name string
		displayName: z.string(),
		// Optional description string
		description: z.optional(z.string()),
		// Optional fields object
		fields: ZeroType,
	})
}

export const zeroIndexZodV1 = createZeroIndexZodV1(z.any())

export type ZeroIndexTypeV1 = z.infer<typeof zeroIndexZodV1>
