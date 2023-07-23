import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: '6sevzmr0',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

})
