import { z } from 'zod'

export const zodBlogPostTypeV1 = z.object({
	title: z.string(),
	slug: z.string(),
	markdown: z.string(),
})

export type BlogPostTypeV1 = z.infer<typeof zodBlogPostTypeV1>
