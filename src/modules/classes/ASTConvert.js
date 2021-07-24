class AST{
    constructor(ASTObject){
        this.ASTObject = ASTObject;
        this.mainElement = null;

        this.convertASTToString(this.ASTObject);
    }
    convertASTToString(obj){
        this.createMainElement(obj);
    }
    //Method which creates main element(with attributes). Children elements will be added by other method
    //The main element cannnot be text, it must be an element like p or span or div etc
    createMainElement(obj){
        //Creating basic element
        const tagName = obj.tagName;
        const element = document.createElement(tagName);

        //Attributes handling
        const attributes = obj.attributes;

        //To this object will go all attributes, it is object cuz I will use object.assing in order to add these attributes to element - https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript
        const attributesObj = {};
    
        //String where will be all names of classes(there can be a lot of classes, so this app creates one string with all classes)
        let valueContentClass = "";
        
        for(const attribut of attributes){
          if(attribut.name === "class"){
            //Must be className, not class - https://developer.mozilla.org/pl/docs/Web/API/Element/className
            attribut.name = "className";
    
            //There can be a lot of classes, this code below "combines" class names into one string(later this one big string will be add as className)
            if(attributesObj.className){
              valueContentClass = valueContentClass+" "+attribut.value;
            }else{
              valueContentClass = attribut.value;
            }
    
            //Define object properties
            Object.defineProperty(attributesObj, attribut.name, {
              value: valueContentClass,
              configurable: true,
              //It must be true in order to object assing will able "see" it - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description
              enumerable: true,
            });
          }else{
            //Define properties if it is not class
            Object.defineProperty(attributesObj, attribut.name, {
              value: attribut.value,
              configurable: true,
              //It must be true in order to object assing will able "see" it - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description
              enumerable: true,
            });
          }
        }
        //Add attributes to element - https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript
        Object.assign(element, attributesObj);
        console.log(element.outerHTML)
    }
}

export default AST;