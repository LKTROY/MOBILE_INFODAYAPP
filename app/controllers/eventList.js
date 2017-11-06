// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var dept_id = args.dept_id || {};
var classtype = args.classtype || {};

$.win.title = dept_id;

Alloy.Collections.webNews.fetch();





function filterFunction(collection) { 
    
    return collection.filter(
        function(model){
            return (model.get("id") == 2);
        }
    );
}
