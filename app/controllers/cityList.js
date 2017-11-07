// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var tableid = args.tableid || {};

//console.log("1111111111");

Alloy.Collections.webNews.fetch();
function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    transform.name = "🤣" + transform.name;

    return transform; 
}
function filterFunction(collection) { 
    
    //console.log("111111111");
    return collection.filter(

        function(model){
            return (model.get("id") == tableid);
            
        }
    );
}


function buttonClick(e) { 
    
    var mapController = Alloy.createController('map', {tableid: e.row.tableid});
    
    Alloy.Globals.tabGroup.activeTab.open(mapController.getView());
};
