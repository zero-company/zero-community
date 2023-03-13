import { z } from 'zod'

export const zodIndexTypeV1 = z.object({
	// Required Universally Unique zero-id, zerox-xxxxxx
	zeroId: z.string(),
	// Required ZeroTypeVx zero-id
	zeroTypeId: z.string(),
	// Optional VersionTypeVx zero-id
	zeroVersionId: z.string(),
	// Optional array of TagTypeVx zero-ids or strings
	zeroTags: z.array(z.string()),
	// Required UserTypeVx zero-id
	ownerId: z.string(),
	// Optional array of UserTypeVx zero-ids
	accessUpdateId: z.array(z.string()),
	// Optional array of UserTypeVx zero-ids
	accessFetchId: z.array(z.string()),
	// Required display name string
	displayName: z.string(),
	// Optional description string
	description: z.string(),
	// Required value
	value: z.any(),
})

export type IndexTypeV1 = z.infer<typeof zodIndexTypeV1>
