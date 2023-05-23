class AST {
  constructor(ASTObject, placeForConvertString, placeForConvertElement = null) {
    this.ASTObject = ASTObject;
    this.placeForConvertString = placeForConvertString;
    this.placeForConvertElement = placeForConvertElement;
    this.mainElement = null;

    this.convertASTToString(this.ASTObject);
  }

  convertASTToString(obj) {
    this.createMainElement(obj);
    this.addChildren(this.mainElement, obj.children);
    this.drawASTString();
  }

  createMainElement(obj) {
    const tagName = obj.tagName;
    const element = document.createElement(tagName);
    const attributes = obj.attributes;

    this.addAttributes(element, attributes);

    this.mainElement = element;
  }

  addChildren(parentElement, children) {
    for (const [ key, childElement ] of Object.entries(children)) {
      if (childElement.nodeType === "element") {
        const element = document.createElement(childElement.tagName);
        this.addAttributes(element, childElement.attributes);

        parentElement.appendChild(element);

        if (childElement.children) {
          this.addChildren(element, childElement.children);
        }
      } else {
        parentElement.innerHTML = childElement.value;
      }
    }
  }

  addAttributes(element, attributesArray) {
    const attributesObj = {};
    let valueContentClass = "";

    for (const attribut of attributesArray) {
      if (attribut.name === "class") {
        attribut.name = "className";

        if (attributesObj.className) {
          valueContentClass = valueContentClass + " " + attribut.value;
        } else {
          valueContentClass = attribut.value;
        }

        Object.defineProperty(attributesObj, attribut.name, {
          value: valueContentClass,
          configurable: true,
          enumerable: true,
        });
      } else {
        Object.defineProperty(attributesObj, attribut.name, {
          value: attribut.value,
          configurable: true,
          enumerable: true,
        });
      }
    }

    Object.assign(element, attributesObj);
  }

  drawASTString() {
    this.placeForConvertString.textContent = this.mainElement.outerHTML;

    if (this.placeForConvertElement) {
      this.placeForConvertElement.appendChild(this.mainElement);
    }
  }
}

export default AST;
