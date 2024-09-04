import { ProChat as AntdProChat } from '@ant-design/pro-chat'
import { useEffect, useState } from 'react'
interface UserMetaType {
  avatar: string
  title: string
}
const ProChatGpt = (props: {
  apiKey: string
  userMeta: UserMetaType
  assistantMeta: UserMetaType
  helloMessage: string
  className: string
}) => {
  const { apiKey, userMeta, assistantMeta, helloMessage , className} = props

  const newUserMeta = {
    avatar:
      userMeta?.avatar ||
      'https://img.shanhuyun.cn/ide_resource/20231227-181853.png',
    title: userMeta?.title || '我',
  }
  const newAssistantMeta = {
    avatar:
      assistantMeta?.avatar ||
      'https://img.shanhuyun.cn/ide_resource/20231227-181853.png',
    title: assistantMeta?.title || '我',
  }
  const [cachedChats, setCachedChats] = useState(null)
  const request = async (message) => {
    const content = message[message?.length - 1]?.content
    const response = await fetch(
      `https://platform-external.3as.cn/extai/qwenStreamChat`,
      {
        method: 'POST',
        responseType: 'stream',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          apiKey: apiKey,
          prompt: 'roboto',
          content: content,
        }),
      }
    )
    if (!response.ok || !response.body) {
      throw new Error('失败')
    }
    const reader = response.body?.getReader()
    const decoder = new TextDecoder('utf-8')
    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close()
              return
            }
            const chunk = decoder.decode(value, { stream: true })
            controller.enqueue(encoder.encode(chunk))
            push()
          })
        }
        push()
      },
    })
    return new Response(readableStream)
  }
  useEffect(() => {
    const cachedData = localStorage.getItem('chats')
    if (cachedData) {
      setCachedChats(JSON.parse(cachedData))
    }
  }, [])
  return (
      <AntdProChat
      className={className}
        initialChats={cachedChats}
        helloMessage={
          helloMessage ||
          '你好，欢迎使用珊瑚云智能AI小助手，有什么可以帮助你的？'
        }
        showTitle
        userMeta={newUserMeta}
        assistantMeta={newAssistantMeta}
        request={request}
        onChatsChange={(chats) => {
          localStorage.setItem(
            'chats',
            JSON.stringify({
              ...chats,
            })
          )
        }}
      ></AntdProChat>
  )
}

export default ProChatGpt
export {
  ProChatGpt
}
