if(item.isPublished()){
    return null;
}
return (new ModalFormButtonModule(application, 
    item, {
    "label":"Publish your profile",
    "formName":"profileForm",
    "formOptions":{
        "template":"form",
        "className":"profile-form"
    },
    "className":"action-profile",
    events:{click:function(){
        item.setPublished(true);
    }}
}))