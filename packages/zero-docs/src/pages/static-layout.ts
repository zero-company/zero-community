import { DocumentTypeV1 } from '@zero-company/zero-types'

const markdown: DocumentTypeV1['fields']['markdown'] = ''

export const staticLayout: DocumentTypeV1 = {
	zeroId: 'zero1-c079f8-d9a49b-392351-cde7b9-a01033-6b4b25',
	zeroTypeId: 'DocumentTypeV1',
	ownerId: 'zero1-60bb8a-b2990b-3d5e9f-348852-398b5e-6f19de',
	displayName: 'Static Layout',
	zeroTags: ['ux'],
	fields: {
		title: 'Static Layout',
		slug: 'static-layout',
		markdown,
	},
}
