import { z } from 'zod'

export const zodBlogPageTypeV1 = z.object({
	title: z.string(),
	slug: z.string(),
	markdown: z.string(),
})

export type BlogPageTypeV1 = z.infer<typeof zodBlogPageTypeV1>
