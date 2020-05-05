class EditorReview{
    constructor(id,gameTitle,about,text,fkEditorId,fkAccountId){
        this.id = id;
        this.gameTitle = gameTitle;
        this.about = about;
        this.text = text;
        this.fkEditorId = fkEditorId;
        this.fkAccountId = fkAccountId;
    }

    getId(){
        return this.id
    }
    getGameTitle(){
        return this.gameTitle
    }
    getAbout(){
        return this.about
    }
    getText(){
        return this.text
    }
    getFkEditorId(){
        return this.fkEditorId
    }
    getFKaccountId(){
        return this.fkAccountId;
    }
}

module.exports = EditorReview;