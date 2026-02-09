// content/index.ts
import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

type C = ComponentType<unknown>

export const projectContent: Record<string, C> = {
  'ualr-chatbot': dynamic(() => import('./projects/ualr-chatbot')),
  'upliftt-ai': dynamic(() => import('./projects/upliftt-ai')),
  'turfhub': dynamic(() => import('./projects/turfhub')),
}

export const researchContent: Record<string, C> = {
  'llm-inference': dynamic(() => import('./research/llm-inference')),
  'ai-in-biomed': dynamic(() => import('./research/ai-in-biomed')),
  'agent-systems': dynamic(() => import('./research/agent-systems')),
}
