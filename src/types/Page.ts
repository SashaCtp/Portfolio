type Page = {
    title: String,
    subtitle: String,
    rows: [Row]
};

type Row = {
    cols: [Col]
}

type Col = {
    elements: []
}

export default Page;