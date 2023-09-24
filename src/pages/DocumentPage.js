import { useState } from 'react'

import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
import { codeBlockPlugin } from '@mdxeditor/editor'
import { codeMirrorPlugin } from '@mdxeditor/editor'
import { CodeToggle } from '@mdxeditor/editor'
import { diffSourcePlugin } from '@mdxeditor/editor'
import { directivesPlugin } from '@mdxeditor/editor'
import { AdmonitionDirectiveDescriptor } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'
import { linkDialogPlugin } from '@mdxeditor/editor'
import { linkPlugin } from '@mdxeditor/editor/plugins/link'
import { listsPlugin } from '@mdxeditor/editor'
import { markdownShortcutPlugin } from '@mdxeditor/editor'
import { quotePlugin } from '@mdxeditor/editor'
import { tablePlugin } from '@mdxeditor/editor'
import { thematicBreakPlugin } from '@mdxeditor/editor'
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'

import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
import { BlockTypeSelect } from '@mdxeditor/editor'
import { ChangeCodeMirrorLanguage } from '@mdxeditor/editor'
import { ConditionalContents } from '@mdxeditor/editor'
import { CreateLink } from '@mdxeditor/editor'
import { DiffSourceToggleWrapper } from '@mdxeditor/editor'
import { InsertAdmonition } from '@mdxeditor/editor'
import { InsertCodeBlock } from '@mdxeditor/editor'
import { InsertTable } from '@mdxeditor/editor'
import { InsertThematicBreak } from '@mdxeditor/editor'
import { ListsToggle } from '@mdxeditor/editor'
import { Separator } from '@mdxeditor/editor'
import { UndoRedo } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'

export default function DocumentPage() {
    const [value, setValue] = useState("")

    const handleChange = (value) => {
        setValue(value)
    }
    return (
        <MDXEditor markdown={value} onChange={handleChange} plugins={[
            codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
            codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', rust: 'Rust' } }),
            directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
            markdownShortcutPlugin(),
            headingsPlugin({ allowedHeadingLevels: [1, 2, 3, 4, 5, 6] }),
            linkPlugin(),
            linkDialogPlugin(),
            listsPlugin(),
            diffSourcePlugin({ viewMode: 'rich-text' }),
            quotePlugin(),
            tablePlugin(),
            thematicBreakPlugin(),
            toolbarPlugin({
                toolbarContents: () => (<>
                    <DiffSourceToggleWrapper>
                        <ConditionalContents options={[
                            { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
                            {
                                fallback: () => (<>
                                    <UndoRedo />
                                    <Separator />
                                    <BoldItalicUnderlineToggles />
                                    <ListsToggle />
                                    <BlockTypeSelect />
                                    <Separator />
                                    <CodeToggle />
                                    <InsertCodeBlock />
                                    <InsertTable />
                                    <CreateLink />
                                    <Separator />
                                    <InsertThematicBreak />
                                    <Separator />
                                    <InsertAdmonition />
                                </>)
                            }
                        ]} />
                    </DiffSourceToggleWrapper>
                </>)
            })
        ]}
        />
    );

}
