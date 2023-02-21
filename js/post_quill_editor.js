let toolbaroptions = [
  ["bold", "italic", "underline", "strike"],
  [{ header: [1, 2, 3, 4, 5, 6, false] }][
    ({ list: "ordered" }, { list: "bullet" })
  ],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "+1" }, { indent: "-1" }],
  [{ align: [] }],
  [{ size: ["small", "large", "x-large", false] }][
    ({ color: [] }, { background: [] })
  ],
  [{ font: [] }],
  ["code-block"],
];
let quill = new Quill("#text-editor", {
  modules: {
    toolbar: toolbaroptions,
  },
  theme: "snow",
});

