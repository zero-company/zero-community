import { z } from 'zod'

export const createZeroIndexV1Zod = <T extends z.ZodTypeAny>(ZeroType: T) => {
	return z.object({
		// Universally unique zero-id, prefix zerox-xxxxxx, generated and reserved on server side
		zeroId: z.string(),
		// Valid ZeroTypeVx zero-id
		typeId: z.string(),
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
		// Optional value object
		value: z.optional(ZeroType),
		// Used by cleaning purge bot
		expirationDate: z.optional(z.date()),
	})
}

export const ZeroIndexV1Zod = createZeroIndexV1Zod(z.any())

export type ZeroIndexV1Type = z.infer<typeof ZeroIndexV1Zod>

export const ZeroIndexV1TestSeed: ZeroIndexV1Type = {
	zeroId: 'zero1-16aa78-9a063c-2e3c59-8e642c-c391ab-403135',
	typeId: 'UserTypeV1',
	versionId: undefined,
	tagsId: undefined,
	ownerId: 'zero1-405f3b-1aab36-6bbd0b-44bfe7-6c8eb9-2a0338',
	accessUpdateId: undefined,
	accessFetchId: undefined,
	name: '',
	description: '',
	value: {
		firstName: 'John Doe',
	},
	expirationDate: new Date('2022-01-12T00:00:00.000Z'),
}
