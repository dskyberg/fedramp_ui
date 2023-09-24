import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
import { CodeToggle } from '@mdxeditor/editor'
import { CreateLink } from '@mdxeditor/editor'
import { DiffSourceToggleWrapper } from '@mdxeditor/editor'
import { markdownShortcutPlugin } from '@mdxeditor/editor'
import { linkPlugin } from '@mdxeditor/editor/plugins/link'
import { linkDialogPlugin } from '@mdxeditor/editor'
import { diffSourcePlugin } from '@mdxeditor/editor'
import { UndoRedo } from '@mdxeditor/editor'




export default function RemarksEditor({ value, onChange }) {
    const edit = false


    if (edit) return (
        <MDXEditor markdown={value} onChange={onChange} plugins={[
            markdownShortcutPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            diffSourcePlugin({ viewMode: 'rich-text' }),
            toolbarPlugin({
                toolbarContents: () => (<>
                    <DiffSourceToggleWrapper>
                        <UndoRedo />
                        <BoldItalicUnderlineToggles />
                        <CodeToggle />
                        <CreateLink />
                    </DiffSourceToggleWrapper>
                </>)
            })
        ]}
        />
    );

    return (
        <MDXEditor markdown={value} readOnly={true} plugins={[
            markdownShortcutPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            diffSourcePlugin({ viewMode: 'rich-text' }),

        ]} />
    )
}