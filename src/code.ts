import {Observable} from "rxjs";

var obserbable = Observable.create((observer:any) => {
    try{
        observer.next('Hey yoo')
        observer.next('How are you ')
        setInterval(()=>{
            observer.next("This repeats....")
        }, 2000)
        // observer.complete()
        // observer.next('This is not printed ')
        } //After complete the next will not run
        catch(err){
            observer.console.error(err);
        }
});

var observer = obserbable.subscribe(
    (x:any)=> addItem(x),
    (err:any)=> addItem(err),
    ()=> addItem("Completed")
    );

    setTimeout(()=>{
        observer.unsubscribe();
    },6001)



function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
