'use client'

import { useState } from 'react'
import {
  Button,
  Column,
  Input,
  Row,
  Spinner,
  Tag,
  Text,
} from '@once-ui-system/core'
import type { APIConfig, APIResponse } from '@/types/playground.types'
import { buildCleanConfig, executeFetch } from '@/utils/playground'

interface APIPlaygroundProps {
  url?: string
  initialPath?: { key: string; value: string }[]
}

export function APIPlayground({
  url = '',
  initialPath = [],
}: APIPlaygroundProps) {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<APIResponse | null>(null)
  const [config, setConfig] = useState<APIConfig>(() => ({
    url,
    method: 'GET',
    headers: [],
    query: [],
    path: initialPath.map((p) => ({ ...p, id: crypto.randomUUID() })),
    body: [],
  }))

  const updateUrl = (value: string) => {
    setConfig((prev) => ({ ...prev, url: value }))
  }

  const updatePathValue = (id: string, value: string) => {
    setConfig((prev) => ({
      ...prev,
      path: prev.path.map((p) => (p.id === id ? { ...p, value } : p)),
    }))
  }

  const handleTest = async () => {
    if (!config.url?.trim()) return
    setLoading(true)
    setResponse(null)
    try {
      const result = await executeFetch(config)
      setResponse(result)
    } catch (err) {
      setResponse({ error: err instanceof Error ? err.message : String(err) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Column
      fillWidth
      gap="16"
      padding="24"
      border="neutral-alpha-medium"
      radius="l"
      marginTop="24"
      marginBottom="24"
    >
      {/* URL row */}
      <Row fillWidth gap="12" vertical="center">
        <Tag variant="green" size="m" label="GET" style={{ flexShrink: 0 }} />
        <Input
          id="api-url"
          style={{ flex: 1 }}
          placeholder="Enter URL"
          value={config.url}
          onChange={(e) => updateUrl(e.target.value)}
        />
      </Row>

      {/* Path parameters */}
      {config.path.length > 0 && (
        <Column gap="8" fillWidth>
          <Text variant="label-strong-s" onBackground="neutral-weak">Path</Text>
          {config.path.map((param) => (
            <Row key={param.id} fillWidth gap="8" vertical="center">
              <Input
                id={`${param.id}-key`}
                value={param.key}
                disabled
                style={{ flex: 1 }}
              />
              <Input
                id={`${param.id}-value`}
                placeholder="Value"
                value={param.value}
                onChange={(e) => updatePathValue(param.id, e.target.value)}
                style={{ flex: 1 }}
              />
            </Row>
          ))}
        </Column>
      )}

      {/* Send button */}
      <Row fillWidth horizontal="end" gap="12" paddingTop="8" borderTop="neutral-alpha-weak">
        <Button
          variant="primary"
          size="m"
          label={loading ? 'Sending…' : 'Send Request'}
          prefixIcon={loading ? undefined : 'play'}
          disabled={!config.url?.trim() || loading}
          onClick={handleTest}
        >
          {loading && <Spinner size="s" />}
        </Button>
      </Row>

      {/* Request + Response panels */}
      <Row fillWidth gap="16" style={{ alignItems: 'stretch' }}>
        <Column flex={1} gap="8" padding="16" radius="m" background="neutral-alpha-weak" style={{ minWidth: 0 }}>
          <Text variant="label-strong-s" onBackground="neutral-weak">
            Request
          </Text>
          <pre
            style={{
              fontSize: 12,
              lineHeight: 1.6,
              overflow: 'auto',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {JSON.stringify(buildCleanConfig(config), null, 2)}
          </pre>
        </Column>

        {response && (
          <Column flex={1} gap="8" padding="16" radius="m" background="neutral-alpha-weak" style={{ minWidth: 0 }}>
            <Row gap="8" vertical="center">
              <Text variant="label-strong-s" onBackground="neutral-weak">
                Response
              </Text>
              {response.status && (
                <Tag
                  variant={response.status < 400 ? 'green' : 'red'}
                  size="s"
                  label={String(response.status)}
                />
              )}
            </Row>
            <pre
              style={{
                fontSize: 12,
                lineHeight: 1.6,
                overflow: 'auto',
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
                color: response.error ? 'var(--danger-solid-strong)' : undefined,
              }}
            >
              {response.error ? response.error : JSON.stringify(response.data, null, 2)}
            </pre>
          </Column>
        )}
      </Row>
    </Column>
  )
}
