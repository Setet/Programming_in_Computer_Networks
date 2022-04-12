var arr=[];


function traversalBFSDOM (rootDom) {
    var n = 0;
    if(!rootDom) return;
    arr.push(rootDom)
    var queue = [rootDom];
    while(queue.length){
        var node = queue.shift();
        if(!node.children.length){
            continue;
        }
        for(var i=0;i<node.children.length;i++){
            arr.push(node.children[i]);
            queue.push(node.children[i]);
            alert(node.children[i].innerHTML.match(/ /g).length);
        }
    }
    return n;
}

var n = 0;

let children=document.body.childNodes;
for(let i=0; i<children.length; i++) { 
    if (children[i].innerHTML != undefined) {
        n++;
    }}

let message2 = document.querySelector('.dom_elem');
message2.textContent =  n;