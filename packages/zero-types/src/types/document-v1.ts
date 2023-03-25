import { z } from 'zod'
import { createZeroIndexZodV1 } from './../zero-types'

export const documentFieldsZodV1 = z.object({
	title: z.string(),
	slug: z.string(),
	markdown: z.string(),
})

export const documentZodV1 = createZeroIndexZodV1(documentFieldsZodV1)

export type DocumentTypeV1 = z.infer<typeof documentZodV1>
