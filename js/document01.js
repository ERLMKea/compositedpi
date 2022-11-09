class Document {
    constructor(title) {
        this.title = title
        this.parent = null
        this.signature = null
    }
    sign(signature) {
        this.signature = signature
    }
    out() {
        console.log("Im a Document title=" + this.title + " parent=" + this.parent.title)
        //console.log(this)
    }

    remove() {
        this.parent.removeMe(this.title)
    }
}

class DocumentComposite {
    constructor(title) {
        this.items = []
        this.title = title
        this.parent = null
    }

    add(item) {
        item.parent = this
        this.items.push(item)
    }

    sign(signature) {
        this.items.forEach((doc) => {
            doc.sign(signature)
        })
    }

    out() {
        console.log("I am Composite title= " + this.title + " parent=" + this.parent.title)
        this.items.forEach((doc) => {
            doc.out()
        })
    }

    removeMe(title) {
        this.items = this.items.filter(obj => obj.title != title)
    }

    remove() {
        this.parent.removeMe(this.title)
    }
}

//simpel tree structucture:   root , mental physical, mental - doc1 doc2 , physical phys1 phys2

const root = new DocumentComposite("root")
root.parent = root
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

doc1.remove()
console.log("xxxxxxxxx")
mental.out()
console.log("yyyyyyyyy")
mental.remove()
root.out()
