class Document {
    constructor(title) {
        this.title = title
        this.signature = null
    }
    sign(signature) {
        this.signature = signature
    }
}

class DocumentComposite {
    constructor(title) {
        this.items = []
    }

    add(item) {
        this.items.push(item)
    }

    sign(signature) {
        this.items.forEach((doc) => {
            doc.sign(signature)
        })
    }
}

//simpel tree structucture:   root , mental physical, mental - doc1 doc2 , physical phys1 phys2

const root = new DocumentComposite("root")
const mental = new DocumentComposite("mental")
root.add(mental)

const doc1 = new Document("Im Doc1")
const doc2 = new Document("Im Doc2")
mental.add(doc1)
mental.add(doc2)

root.sign("DonaldDuck")
console.log(root)