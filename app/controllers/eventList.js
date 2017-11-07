// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var dept_id = args.dept_id || {};
var classtype = args.classtype || {};
var price = args.price || {};
var actiontype = args.actiontype || {};

$.win.title = dept_id;

Alloy.Collections.webNews.fetch();





function filterFunction(collection) { 
    

    //console.log(price);
    return collection.filter(

        function(model){
            if (actiontype == 1){
                return (model.get("class") == classtype && model.get("price")<price);
            } else{
                return (model.get("class") == classtype && model.get("price")>price);
            }
            
        }
    );
}

function cityClick(e) { 
    
    var cityListController = Alloy.createController('cityList', {tableid: e.row.tableid});
    
    Alloy.Globals.tabGroup.activeTab.open(cityListController.getView());
};
