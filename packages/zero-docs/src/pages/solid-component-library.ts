import { DocumentTypeV1 } from '@zero-company/zero-types'

const markdown: DocumentTypeV1['fields']['markdown'] = ''

export const solidComponentLibrary: DocumentTypeV1 = {
	zeroId: 'zero1-bf5bb4-4e8c05-64bf74-9d18b3-f66572-9e09f8',
	zeroTypeId: 'DocumentTypeV1',
	ownerId: 'zero1-60bb8a-b2990b-3d5e9f-348852-398b5e-6f19de',
	displayName: 'Solid Component Library',
	zeroTags: ['ux', 'dx', 'solidjs'],
	fields: {
		title: 'Solid Component Library',
		slug: 'solid-component-library',
		markdown,
	},
}
