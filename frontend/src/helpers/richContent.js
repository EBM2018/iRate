import {convertToRaw, convertFromRaw, EditorState} from "draft-js";

export const createRawContent = (richContent) => {
    let contentState = richContent.getCurrentContent();
    let note = {content: convertToRaw(contentState)};
    note["content"] = JSON.stringify(note.content);
    return note["content"];
};

export const createRichContentFromRaw = (rawContent) => {
    return EditorState.createWithContent(convertFromRaw(JSON.parse(rawContent)));
};
