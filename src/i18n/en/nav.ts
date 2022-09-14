/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
	{ text: 'Installation', slug: 'install/auto', key: 'install' },
	{ text: 'Editor Setup', slug: 'editor-setup', key: 'editor-setup' },
	{ text: 'Migration Guide', slug: 'migrate', key: 'migrate' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: 'Why Astro', slug: 'concepts/why-astro', key: 'concepts/why-astro' },
	{ text: 'MPA vs. SPA', slug: 'concepts/mpa-vs-spa', key: 'concepts/mpa-vs-spa' },
	{ text: 'Astro Islands', slug: 'concepts/islands', key: 'concepts/islands' },

	{ text: 'Basics', header: true, type: 'learn', key: 'basics' },
	{
		text: 'Project Structure',
		slug: 'core-concepts/project-structure',
		key: 'core-concepts/project-structure',
	},
	{
		text: 'Astro Components',
		slug: 'core-concepts/astro-components',
		key: 'core-concepts/astro-components',
	},
	{ text: 'Pages', slug: 'core-concepts/astro-pages', key: 'core-concepts/astro-pages' },
	{ text: 'Layouts', slug: 'core-concepts/layouts', key: 'core-concepts/layouts' },
	{ text: 'Markdown & MDX', slug: 'guides/markdown-content', key: 'guides/markdown-content' },
	{ text: 'Routing', slug: 'core-concepts/routing', key: 'core-concepts/routing' },
	{ text: 'Static Assets', slug: 'guides/imports', key: 'guides/imports' },
	{ text: 'Data Fetching', slug: 'guides/data-fetching', key: 'guides/data-fetching' },
	{ text: 'Deploy', slug: 'guides/deploy', key: 'guides/deploy' },
	{ text: 'Troubleshooting', slug: 'guides/troubleshooting', key: 'guides/troubleshooting' },

	{ text: 'Guides', header: true, type: 'learn', key: 'features' },
	{ text: 'Integrations', slug: 'guides/integrations-guide', key: 'guides/integrations-guide' },
	{
		text: 'UI Frameworks',
		slug: 'core-concepts/framework-components',
		key: 'core-concepts/framework-components',
	},
	{
		text: 'Server-side Rendering (SSR)',
		slug: 'guides/server-side-rendering',
		key: 'guides/server-side-rendering',
	},
	{ text: 'CSS & Styling', slug: 'guides/styling', key: 'guides/styling' },
	{ text: 'Images', slug: 'guides/images', key: 'guides/images' },
	{ text: 'Fonts', slug: 'guides/fonts', key: 'guides/fonts' },
	{
		text: 'Sharing State',
		slug: 'core-concepts/sharing-state',
		key: 'core-concepts/sharing-state',
	},
	{ text: 'RSS', slug: 'guides/rss', key: 'guides/rss' },

	{ text: 'Configuration', header: true, type: 'learn', key: 'configuration' },
	{
		text: 'The Astro Config File',
		slug: 'guides/configuring-astro',
		key: 'guides/configuring-astro',
	},
	{ text: 'TypeScript', slug: 'guides/typescript', key: 'guides/typescript' },
	{ text: 'Import Aliases', slug: 'guides/aliases', key: 'guides/aliases' },
	{
		text: 'Environment Variables',
		slug: 'guides/environment-variables',
		key: 'guides/environment-variables',
	},

	{ text: 'Reference', header: true, type: 'learn', key: 'reference' },
	{
		text: 'Configuration',
		slug: 'reference/configuration-reference',
		key: 'reference/configuration-reference',
	},
	{ text: 'CLI', slug: 'reference/cli-reference', key: 'reference/cli-reference' },
	{ text: 'Runtime API', slug: 'reference/api-reference', key: 'reference/api-reference' },
	{
		text: 'Integrations API',
		slug: 'reference/integrations-reference',
		key: 'reference/integrations-reference',
	},
	{ text: 'Adapter API', slug: 'reference/adapter-reference', key: 'reference/adapter-reference' },
	{
		text: 'Template Directives',
		slug: 'reference/directives-reference',
		key: 'reference/directives-reference',
	},
	{ text: 'NPM Package Format', slug: 'guides/publish-to-npm', key: 'guides/publish-to-npm' },

	{ text: 'Tutorial', header: true, type: 'tutorial', key: 'tut/0' },

	{ text: '0. Prepare your working environment', slug: 'tutorial/0-introduction', key: 'tut/0/0' },
	{ text: '1. Create and deploy your first Astro site', slug: 'tutorial/1-setup', key: 'tut/1/0' },
	{
		text: '2. Create, style and navigate between Astro pages on your site',
		slug: 'tutorial/2-astro-pages',
		key: 'tut/2/0',
	},
	{ text: '3. Build with reusable UI components', slug: 'tutorial/3-components', key: 'tut/3/0' },
	{
		text: '4. Authoring and Templating Markdown Blog Posts',
		slug: 'tutorial/4-markdown',
		key: 'tut/4/0',
	},
	{
		text: '5. Fetching and working with data from your project files',
		slug: 'tutorial/5-astro-api',
		key: 'tut/5/0',
	},
	{
		text: '6. Adding interactive UI elements to your site',
		slug: 'tutorial/6-interactivity',
		key: 'tut/6/0',
	},
] as const;
