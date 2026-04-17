import type esDict from '@/dictionaries/es.json'

export type Dictionary = typeof esDict

const dictionaries = {
  es: () => import('@/dictionaries/es.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
}

export async function getDictionary(lang: 'es' | 'en'): Promise<Dictionary> {
  return dictionaries[lang]?.() ?? dictionaries.es()
}
