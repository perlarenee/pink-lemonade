'use client';

import React, { useState, useRef, useEffect } from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	Indent,
	IndentBlock,
	Italic,
	List,
	ListProperties,
	Paragraph,
	RemoveFormat,
	SelectAll,
	SourceEditing,
	Underline,
	Undo
} from 'ckeditor5';
//import '@/node_modules/ckeditor5/dist/ckeditor5.css';

/*const FroalaEditor = dynamic(
    async () => {
      const packages = await Promise.all([
        import("react-froala-wysiwyg"),
        import("froala-editor/js/froala_editor.pkgd.min.js"),
        import("froala-editor/js/plugins/align.min.js"),
        import("froala-editor/js/plugins/paragraph_format.min.js"),
        import("froala-editor/js/plugins/lists.min.js"),
        import("froala-editor/js/plugins/code_view.min.js"),
        import("froala-editor/js/plugins/char_counter.min.js"),
        import("froala-editor/js/plugins/fullscreen.min.js"),
      ]);
  
      return packages[0];
    },
    { ssr: false }
  );*/

export default function CustomEditorField (props){

const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'sourceEditing',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'removeFormat',
				'|',
				'horizontalLine',
				'blockQuote',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Alignment,
			Autosave,
			BlockQuote,
			Bold,
			Essentials,
			GeneralHtmlSupport,
			Heading,
			HorizontalLine,
			Indent,
			IndentBlock,
			Italic,
			List,
			ListProperties,
			Paragraph,
			RemoveFormat,
			SelectAll,
			SourceEditing,
			Underline,
			Undo
		],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		initialData:
			"",
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		placeholder: 'Your content here!'
	};

  const inputHandler = (event, editor) => {
    //console.log(editor.getData());
    props.setTextareaContent(editor.getData());
  };

    return (
      <>
        <div className="main-container">
          <div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
            <div className="editor-container__editor">
              <div ref={editorRef}>{isLayoutReady && <CKEditor 
              id="customEditor"
              editor={ClassicEditor} 
              config={editorConfig} 
              onChange={inputHandler} 
              />}</div>
            </div>
          </div>
        </div>
      </>
    );
  }