import { z } from 'zod'

export const createZeroIndexV1Zod = <T extends z.ZodTypeAny>(ValuesZod: T) => {
	return z.object({
		zeroId: z.string(),
		ownerId: z.string(),
		accessUpdateId: z.optional(z.array(z.string())),
		accessFetchId: z.optional(z.array(z.string())),
		creationDate: z.optional(z.date()),
		lastModifiedDate: z.optional(z.date()),
		expirationDate: z.optional(z.date()),
		name: z.string(),
		description: z.optional(z.string()),
		versionId: z.optional(z.string()),
		tagsId: z.optional(z.array(z.string())),
		zeroType: z.string(),
		values: ValuesZod,
	})
}

export const ZeroIndexV1Zod = createZeroIndexV1Zod(z.any())
export type ZeroIndexV1Type<T = any> = Omit<
	z.infer<typeof ZeroIndexV1Zod>,
	'values'
> & {
	values: T
}
