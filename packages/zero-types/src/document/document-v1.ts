import { z } from 'zod'

export const DocumentV1Zod = z.object({
	documentId: z.string(),
	title: z.string(),
	slug: z.string(),
	description: z.optional(z.string()),
	markdown: z.string(),
	contributors: z.array(z.string()),
	tags: z.optional(z.array(z.string())),
	keywords: z.optional(z.array(z.string())),
	status: z.enum(['published', 'draft', 'unlisted']),
})
export type DocumentV1Type = z.infer<typeof DocumentV1Zod>

export const DocumentV1ValuesZod = DocumentV1Zod.omit({ documentId: true })
export type DocumentV1ValuesType = z.infer<typeof DocumentV1ValuesZod>
