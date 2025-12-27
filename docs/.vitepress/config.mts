import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/SynthesizerV-Lite-DownloadSite/',
  title: "Synthesizer V Lite声库下载站",
  description: "在这里下载SV Lite声库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/Before_starting' }
    ],

    sidebar: [
      {
        text: '下载',
        items: [
          { text: '开始前', link: '/Before_starting' },
          { text: '下载Synthesizer V Studio 1 Basic', link: '/SynthesizerV_Download' },
	  { text: '下载Lite声库', link: '/LiteVoicedatabase_Download' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PhigrcraftOSawa/SynthesizerV-Lite-DownloadSite' }
    ],
    logo: 'https://raw.githubusercontent.com/PhigrcraftOSawa/SynthesizerV-Lite-DownloadSite/refs/heads/main/assets/SynthVLogo.svg'
  }
})
