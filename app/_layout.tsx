import { pug, StartupjsProvider } from 'startupjs'
import { Button, confirm } from '@startupjs/ui'
import { Stack } from 'expo-router'

export default function RootLayout () {
  const handlePress = async () => {
    const res = await confirm({
      title: 'Remove member',
      message: 'Are your sure you want to remove '
    })
    console.log(res)
  }

  return pug`
    StartupjsProvider
      Button.btn(onPress=handlePress) Click me
      Stack
  `
}
