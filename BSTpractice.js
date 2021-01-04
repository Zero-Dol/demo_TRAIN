class Node{
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }

  class BinarySearchTree{
    constructor(){
        this.root = null;
      }

    insert(){
        const newNode = new Node(value);
        if(this.root === null)
          this.root = newNode;
        
        else
        {
              let currentNode = this.root;
              while(true){
                if(value < currentNode.value){
                  //left
                  if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                  }
                  currentNode = currentNode.left;
                }else
                {//right
                  if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                  }
                  currentNode = currentNode.right;
  
                }
            }
        }
    }

    search(){
        if(!this.root){
            return false;
          }
            let currentNode = this.root;
            while(currentNode){
              if(value < currentNode.value){
                currentNode = currentNode.left
              }
              else if(value > currentNode.value){
                currentNode = currentNode.right;
              }
              else if (value === currentNode.value)
              return currentNode;
            }
            return false;
    }

    delete(){
        if(!this.root){
            return false;
          }
          let currentNode = this.root;
        let prevNode = null;
        while(currentNode){
            if(value < currentNode.value){
              prevNode = currentNode;
              currentNode = currentNode.left
            }
            else if(value > currentNode.value){
              prevNode = currentNode;
              currentNode = currentNode.right;
            }
            else if (value === currentNode.value){
                //Option 1: No right child: 
                if(currentNode.right === null){
                    if(prevNode === null){
                      this.root = currentNode.left;
                    }
                    else {
                       //if parent > current value, make current left child a child of parent
              if(currentNode.value < prevNode.value) {
                prevNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > prevNode.value) {
                prevNode.right = currentNode.left;
              }
                    }
              }
                //Option 2: Right child which doesnt have a left child
                else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(prevNode === null) {
                      this.root = currentNode.right;
                    } else {
                       //if parent > current, make right child of the left the parent
                  if(currentNode.value < prevNode.value) {
                  prevNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > prevNode.value) {
                  prevNode.right = currentNode.right;
                  }
               }
              }
                  //Option 3: Right child that has a left child
                  else {
  
                    //find the Right child's left most child
                    let leftmost = currentNode.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                      leftmostParent = leftmost;
                      leftmost = leftmost.left;
                    }
                    
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
        
                    if(prevNode === null) {
                      this.root = leftmost;
                    } else {
                      if(currentNode.value < prevNode.value) {
                        prevNode.left = leftmost;
                      } else if(currentNode.value > prevNode.value) {
                        prevNode.right = leftmost;
                      }
                    }
                  }
                }
              }
    }


        InOrderRecursive(){
            return inOrderTraversal(this.root, []);
        }

        PreOrderRecursive(){
            return preOrderTraversal(this.root, [])
        }

        PostOrderRecursive(){
            return postOrderTraversal(this.root, [])
        }
  }


    function inOrderTraversal(node, list){
        list.push(node.value);
        if(node.left) {
            inOrderTraversal(node.left, list);
        }
        if(node.right) {
            inOrderTraversal(node.right, list);
        }
        return list;
    }

    function preOrderTraversal(node, list){
        list.push(node.value);
        if(node.left) {
            preOrderTraversal(node.left, list);
        }
        if(node.right) {
            preOrderTraversal(node.right, list);
        }
        return list;
    }

    function postOrderTraversal(node, list){
        
        if(node.left) {
            postOrderTraversal(node.left, list);
        }
        if(node.right) {
            postOrderTraversal(node.right, list);
        }
        list.push(node.value);
        return list;
    }

  const tree = new BinarySearchTree();
   tree.insert(9);
   tree.insert(4);
   tree.insert(20);
   tree.insert(1);
   tree.insert(6);
   tree.insert(15);
   tree.insert(170);

   console.log('DFSpre', tree.DFTPreOrder());
console.log('DFSin', tree.DFTInOrder());
console.log('DFSpost', tree.DFTPostOrder());