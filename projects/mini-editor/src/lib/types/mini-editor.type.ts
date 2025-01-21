import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAngleDown, faBold, faIndent, faItalic, faLink, faLinkSlash, faListOl, faListUl, faOutdent, faPen, faRotateLeft, faRotateRight, faStrikethrough, faSubscript, faSuperscript, faUnderline, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export const MiniEditorIcons: Record<string, IconDefinition> = {
  bold: faBold,
  italic: faItalic,
  underline: faUnderline,
  strike_through: faStrikethrough,
  super_script: faSuperscript,
  sub_script: faSubscript,
  list_ol: faListOl,
  list_ul: faListUl,
  link: faLink,
  unlink: faLinkSlash,
  align_left: faAlignLeft,
  align_center: faAlignCenter,
  align_right: faAlignRight,
  align_justify: faAlignJustify,
  indent: faIndent,
  outdent: faOutdent,
  undo: faRotateLeft,
  redo: faRotateRight,
  pen: faPen,
  arrow: faAngleDown
};

export const MiniEditorStyles: string[] = [
  "Normal",
  "Heading 1",
  "Heading 2",
  "Heading 3",
  "Heading 4"
];

export const MiniEditorFonts: string[] = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive"
];