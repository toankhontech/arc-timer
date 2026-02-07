import type { Theme, DeepPartial } from '@toankhontech/arctimer-core'
import { defaultTheme } from './themes/default'

function deepMerge<T extends Record<string, any>>(
  base: T,
  override: DeepPartial<T>
): T {
  const result = { ...base }

  for (const key in override) {
    if (Object.prototype.hasOwnProperty.call(override, key)) {
      const overrideValue = override[key]
      const baseValue = base[key]

      if (
        overrideValue &&
        typeof overrideValue === 'object' &&
        !Array.isArray(overrideValue) &&
        baseValue &&
        typeof baseValue === 'object' &&
        !Array.isArray(baseValue)
      ) {
        ;(result as any)[key] = deepMerge(
          baseValue as Record<string, any>,
          overrideValue as Record<string, any>
        )
      } else if (overrideValue !== undefined) {
        ;(result as any)[key] = overrideValue
      }
    }
  }

  return result
}

export interface CreateThemeOptions extends DeepPartial<Theme> {
  extends?: Theme
}

export function createTheme(options: CreateThemeOptions): Theme {
  const { extends: baseTheme, ...override } = options
  const base = baseTheme ?? defaultTheme

  return Object.freeze(deepMerge(base, override))
}
