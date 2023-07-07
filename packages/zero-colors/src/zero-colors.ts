/**
 * References
 * https://spectrum.adobe.com/page/color-fundamentals
 * https://tailwindcss.com/docs/customizing-colors
 *
 * TODO: Fix missing deprecation flag from 'as const'
 * https://github.com/microsoft/TypeScript/issues/39374
 * https://github.com/microsoft/TypeScript/pull/46167
 */

import { material } from './material'
import { spectrum } from './spectrum'
import * as tailwind from 'tailwindcss/colors'

/**
 * TODO: Fix strict color typechecking without replacing type assertion
 * as const satisfies Record<string, ColorType<typeof index>>
 * as const satisfies ColorType<typeof index>
 * https://github.com/microsoft/TypeScript/issues/31062
 */
export type IndexType = readonly string[]
export type ColorType<I extends IndexType> = Record<I[number], string>

/**
 * Modified Tailwind + Material color palette
 */
export const zeroColors = {
	...tailwind,
	material,
	/** @deprecated As of zero-colors v1.0.1, single flat palettes are recommended. */
	spectrum,
}
