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
import * as tailwindColors from 'tailwindcss/colors'

/**
 * TODO: Fix strict color typechecking without replacing type assertion
 * as const satisfies Record<string, ColorType<typeof index>>
 * as const satisfies ColorType<typeof index>
 * https://github.com/microsoft/TypeScript/issues/31062
 */
export type IndexType = readonly string[]
export type ColorType<I extends IndexType> = Record<I[number], string>

const zero = {
	primary: tailwindColors.zinc[100],
	bg: tailwindColors.zinc[950],
	divider: tailwindColors.zinc[900],
	surface: tailwindColors.zinc[900],
	surfaceHover: tailwindColors.zinc[800],
	surfaceFocus: tailwindColors.zinc[700],
	info: tailwindColors.blue[600],
	success: tailwindColors.green[600],
	warning: tailwindColors.yellow[500],
	error: tailwindColors.red[600],
	colorDefault: tailwindColors.zinc[400],
	colorHover: tailwindColors.zinc[100],
	colorFocus: tailwindColors.zinc[100],
}

/**
 * Modified Tailwind + Material color palette
 */
export const zeroColors = {
	...tailwindColors,
	material,
	/** @deprecated As of zero-colors v1.0.1, single flat palettes are recommended. */
	spectrum,
	zero
}
