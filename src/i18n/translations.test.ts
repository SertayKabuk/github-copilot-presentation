import { describe, expect, it } from 'vitest';
import en from './translations/en';
import tr from './translations/tr';

function normalizeShape(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeShape(item));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nested]) => [key, normalizeShape(nested)]),
    );
  }

  return typeof value;
}

describe('translations', () => {
  it('keep the English and Turkish trees aligned', () => {
    expect(normalizeShape(tr)).toEqual(normalizeShape(en));
  });
});
