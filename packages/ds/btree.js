class BTree {
    
    /**@type {BTreeNode} */
    root

    /**@type {number} */
    degree


    insert(/**@type {number} */key) {
        if (this.root) {
            if(this.root.keys.length >= this.maxKeys() - 1) {
                let position = 0
                while (key > this.root.keys[position]) {
                    position++
                }

                if(position > 0) {
                    position--
                }
                let [ikey, newChild] = this.root.split(position, this.maxKeys())
        
                let newRoot = new BTreeNode()
                
                newRoot.children.push(this.root, newChild)
                console.log(position, ikey)
                newRoot.keys.push(key, ikey)

                this.root = newRoot
            }else {
                this.root.keys.push(key)
            }
        } else {
            let newRoot = new BTreeNode()
            newRoot.keys.push(key)
            this.root = newRoot
        }
    }

    constructor(/**@type {number} */ degree) {
        this.degree = degree
    }

    maxKeys() {
        return this.degree * 2 - 1
    }

    minKeys() {
        return this.degree - 1
    }
}


class BTreeNode {
    
    /**@type {number[]} */
    keys = []


    /**@type {BTreeNode[]} */
    children = []

    /**
     * 
     * @param {number} i 
     * @param {number} maxNumbers 
     */
    splitChild(i, maxNumbers) {
        const child = this.children[i]

        let [key, newChild] = child.split(i, maxNumbers)

        let position = 0
        while (key > this.keys[position]) {
            position++
        }

        if(position > 0) {
            position--
        }
        this.keys.splice(position, 0, key)


        this.children.push(newChild)
    }

    /**
     * 
     * @param {number} i 
     * @returns {[number, BTreeNode]}
     */
    split(i, maxNumbers) {
        let newNode = new BTreeNode()
        let key = this.keys[i]
        newNode.keys = this.keys.splice(i, maxNumbers / 2)

        return [key, newNode]
    }

    /**
     * 
     * @param {number} key 
     * @param {number} maxNumber 
     */
    insert(key, maxNumber) {
        console.log(this)
        let position = 0

        while (key > this.keys[position]) {
            position++
        }

        this.keys.splice(position, 0, key)

        if (this.keys.length >= maxNumber) {
            this.splitChild(position, maxNumber)
        }
        this.children[position].insert(key, maxNumber)
        // if(this.children[position]) {
        //     this.children[position].insert(key, maxNumber)
        // }
    }

    /**
     *  
     * @param {number} key 
     */
    insertNotFull(key) {
        if (this.isLeaf()) {
            let position = 0
            while (key > this.keys[position]) {
                position++
            }
            this.keys.splice(position, 0, key);
        } else {
            let position = 0
            while (key > this.keys[position]) {
                position++
            }

            this.children[position].insertNotFull(key)
        }
    }

    /**
     * 
     * @returns {boolean}
     */
    isLeaf() {
        return this.children.length === 0
    }
}


let btree = new BTree(2)

btree.insert(1)
btree.insert(2)
btree.insert(3)
btree.insert(4)
btree.insert(5)
btree.insert(6)
btree.insert(7)
btree.insert(8)

console.log(btree)