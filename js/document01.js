class Document {
    constructor(title) {
        this.title = title
        this.signature = null
    }
    sign(signature) {
        this.signature = signature
    }
    out() {
        console.log("Im a Document title=" + this.title)
        //console.log(this)
    }
}

class DocumentComposite {
    constructor(title) {
        this.items = []
        this.title = title
    }

    add(item) {
        this.items.push(item)
    }

    sign(signature) {
        this.items.forEach((doc) => {
            doc.sign(signature)
        })
    }

    out() {
        console.log("I am Composite title= " + this.title)
        this.items.forEach((doc) => {
            doc.out()
        })
    }
}

//simpel tree structucture:   root , mental physical, mental - doc1 doc2 , physical phys1 phys2

const root = new DocumentComposite("root")
const mental = new DocumentComposite("mental")
const physical = new DocumentComposite("physical")
root.add(mental)
root.add(physical)

const doc1 = new Document("Im Doc1")
const doc2 = new Document("Im Doc2")
mental.add(doc1)
mental.add(doc2)

const phys1 = new Document("Im Phys1")
const phys2 = new Document("Im Phys2")
physical.add(phys1)
physical.add(phys2)


root.sign("DonaldDuck")
doc1.out()
mental.out()

