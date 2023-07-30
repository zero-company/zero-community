import { z } from 'zod'
import { AccountV1ValuesType } from '../account/account-v1'

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

export const ZeroIndexV1TestSeed: ZeroIndexV1Type<AccountV1ValuesType> = {
	zeroId: 'zero1-16aa78-9a063c-2e3c59-8e642c-c391ab-403135',
	zeroType: 'AccountV1',
	versionId: undefined,
	tagsId: undefined,
	ownerId: 'zero1-16aa78-9a063c-2e3c59-8e642c-c391ab-403135',
	accessUpdateId: undefined,
	accessFetchId: undefined,
	name: 'John Doe Account',
	description: '',
	values: {
		email: 'example@test.com',
		userName: 'John Doe',
		passwordHash: '',
	},
	expirationDate: new Date('2022-01-12T00:00:00.000Z'),
}
