import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "lyc8503's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
  group: {
    '🔐 Private': ['n8n'],
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example TCP Monitor
    {
      id: 'n8n',
      name: 'N8n Server',
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ambitionsight-n8n.hf.space',
      timeout: 5000,
    },
  ],
  notification: {
  },
  callbacks: {
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
