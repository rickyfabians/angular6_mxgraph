declare class mxCodec {
    constructor(document?: any);
    document;
    objects;
    elements;
    encodeDefaults;
    putObject(id, obj)
    getObject(id)
    lookup(id)
    getElementById(id)
    addElement(node)
    getId(obj)
    reference(obj)
    encode(obj)
    decode(node, into)
    encodeCell(cell, node, includeChildren)
    isCellCodec(codec)
    decodeCell(node, restoreStructures)
    insertIntoGraph(cell)
    setAttribute(node, attribute, value)


}