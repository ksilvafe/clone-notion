import { useEditor, EditorContent, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

lowlight.registerLanguage('html', html)
export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })
  return (
    <>
      <EditorContent className="max-w-[700px] mx-auto pt-16 prose m-auto" editor={editor} />
      { editor && (
        <BubbleMenu className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-x-zinc-600" editor={editor} tippyOptions={{ duration: 100 }}>
          <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={"editor.isActive('bold') ? 'is-active' : '' p-2 text-white text-sm flex items-center gap-1.5 font-medium leading-none"}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={"editor.isActive('italic') ? 'is-active' : '' p-2 text-white text-sm flex items-center gap-1.5 font-medium leading-none"}
        >
          italic
        </button>
        </BubbleMenu>
      )}
    </>
  )
}