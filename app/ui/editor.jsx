'use client';

//import "froala-editor/js/plugins.pkgd.min.js";
//import 'froala-editor/js/plugins.pkgd.min.js';
//import 'froala-editor/js/plugins.pkgd.min.js';
//import 'froala-editor/css/plugins.pkgd.min.css';
import {revalidatePath} from 'next/cache';
//import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/plugins/code_view.min.css';
import 'froala-editor/css/plugins/char_counter.min.css';
import 'froala-editor/css/plugins/fullscreen.min.css';

//import 'froala-editor/js/plugins/lists.min.js';


import React, { useState } from "react";
import dynamic from 'next/dynamic';

//import FroalaEditorComponent from 'react-froala-wysiwyg';
//const FroalaEditorComponent = dynamic(() => import('react-froala-wysiwyg'),{ ssr: false });
//dynamic( () => import('froala-editor/js/plugins.pkgd.min.js'),{ ssr: false });
//dynamic( () => import('froala-editor/js/froala_editor.pkgd.min.js'), { ssr: false });
//dynamic( () => import('froala-editor/js/plugins/fullscreen.min.js'), { ssr: false });


const FroalaEditor = dynamic(
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
  );
  

export default function FroalaEditorField (props){
  const [model, setModel] = useState(props.textareaContent);
  const handleModelChange = (event) => {
      setModel(event);
  };
  const config = {
    heightMin:100,
    attribution: false,
    listAdvancedTypes: true,
    pluginsEnabled: [
        'align',
        'codeView',
        'fullscreen',
        'charCounter',
        'aviary', 'image', 'fontFamily', 'fontSize', 'help', 'colors', 'paragraphStyle', 'align', 'lists', 'outdent', 'indent', 'paragraphFormat', 'specialCharacters', 'hr', 'clearFormatting', 'link', 'embedly', 'file', 'table', 'undo', 'redo', 'spellchecker'
    ],
   //toolbarButtons: ['paragraphFormat', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',  'align', 'formatOL', 'formatUL', 'outdent', 'indent',  'clearFormatting', '|',  'undo', 'redo','fullscreen', 'html'],
   // toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo','trackChanges','markdown','fullscreen', ],
    events : {
      'contentChanged' : function() {
        props.setTextareaContent(this.html.get());
      },
     }
  };


    return (
        <FroalaEditor 
        tag='textarea' 
        config={config}
        model={model}
        onModelChange={handleModelChange}
        />
    );


    
    
  }