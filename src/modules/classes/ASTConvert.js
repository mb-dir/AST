class AST{
    constructor(ASTObject){
        this.ASTObject = ASTObject;

        this.convertASTToString(this.ASTObject);
    }
    convertASTToString(obj){
        for(const [key, value] of Object.entries(obj)){
            console.log(key, value)
            if(typeof value === "object"){
                this.convertASTToString(value);
            }
        }
    }

}

export default AST;