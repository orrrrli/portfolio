'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Button,
  Column,
  IconButton,
  Input,
  Row,
  SegmentedControl,
  Spinner,
  Tag,
  Text,
} from '@once-ui-system/core'
import type { APIConfig, APIResponse, Parameter } from '@/types/playground.types'
import { buildCleanConfig, executeFetch, parseCurlCommand, titleCase } from '@/utils/playground'

type TabType = 'path' | 'query' | 'headers'

interface APIPlaygroundProps {
  url?: string
  initialHeaders?: { key: string; value: string }[]
  initialPath?: { key: string; value: string }[]
}

export function APIPlayground({
  url = '',
  initialHeaders = [],
  initialPath = [],
}: APIPlaygroundProps) {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('path')
  const [response, setResponse] = useState<APIResponse | null>(null)
  const [config, setConfig] = useState<APIConfig>(() => ({
    url,
    method: 'GET',
    headers: initialHeaders.map((h) => ({ ...h, id: crypto.randomUUID() })),
    query: [],
    path: initialPath.map((p) => ({ ...p, id: crypto.randomUUID() })),
    body: [],
  }))

  const updateUrl = (value: string) => {
    setConfig((prev) => ({ ...prev, url: value }))
  }

  const handleCurlParse = useCallback((curlCommand: string) => {
    try {
      const parsed = parseCurlCommand(curlCommand)
      setConfig((prev) => ({ ...prev, ...parsed, method: 'GET' } as APIConfig))
    } catch {
      // ignore malformed curl
    }
  }, [])

  useEffect(() => {
    if (config.url?.trim().toLowerCase().startsWith('curl ')) {
      handleCurlParse(config.url)
    }
  }, [config.url, handleCurlParse])

  const getTabItems = (): Parameter[] => {
    if (activeTab === 'headers') return config.headers
    if (activeTab === 'query') return config.query
    return config.path
  }

  const setTabItems = (items: Parameter[]) => {
    setConfig((prev) => ({ ...prev, [activeTab]: items }))
  }

  const addItem = () => {
    setTabItems([...getTabItems(), { id: crypto.randomUUID(), key: '', value: '' }])
  }

  const removeItem = (id: string) => {
    setTabItems(getTabItems().filter((p) => p.id !== id))
  }

  const updateItem = (id: string, field: 'key' | 'value', value: string) => {
    setTabItems(getTabItems().map((p) => (p.id === id ? { ...p, [field]: value } : p)))
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

  const tabs = [
    { value: 'path', label: 'Path' },
    { value: 'query', label: 'Query' },
    { value: 'headers', label: 'Headers' },
  ]

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
          placeholder="Enter URL or paste a cURL command"
          value={config.url}
          onChange={(e) => updateUrl(e.target.value)}
        />
      </Row>

      {/* Tabs */}
      <SegmentedControl
        buttons={tabs}
        selected={activeTab}
        onToggle={(val) => setActiveTab(val as TabType)}
      />

      {/* Parameter list */}
      <Column gap="8" fillWidth style={{ minHeight: 64 }}>
        {getTabItems().map((param) => (
          <Row key={param.id} fillWidth gap="8" vertical="center">
            <Input
              id={`${param.id}-key`}
              placeholder="Key"
              value={param.key}
              disabled={activeTab === 'path'}
              onChange={(e) => updateItem(param.id, 'key', e.target.value)}
              style={{ flex: 1 }}
            />
            <Input
              id={`${param.id}-value`}
              placeholder="Value"
              value={param.value}
              onChange={(e) => updateItem(param.id, 'value', e.target.value)}
              style={{ flex: 1 }}
            />
            {activeTab !== 'path' && (
              <IconButton
                icon="close"
                variant="ghost"
                size="m"
                tooltip="Remove"
                onClick={() => removeItem(param.id)}
              />
            )}
          </Row>
        ))}
        {activeTab !== 'path' && (
          <Button
            variant="tertiary"
            size="s"
            prefixIcon="plus"
            label={`Add ${titleCase(activeTab)}`}
            onClick={addItem}
            style={{ alignSelf: 'flex-start', marginTop: 4 }}
          />
        )}
      </Column>

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
