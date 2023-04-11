import React from "react";
import ForEditor from "for-editor";


const Write: React.FC = () => {
    return (
        <ForEditor
            height="calc(100vh - 64px)"
            lineNum={0}
            toolbar={{
                h1: true,
                h2: true,
                h3: true,
                h4: true,
                img: true,
                link: true,
                code: true,
                expand: true,
                undo: true,
                redo: true,
            }}
        />
    )
}

export default Write