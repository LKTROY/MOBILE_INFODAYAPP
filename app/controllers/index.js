$.index.open();
Alloy.Globals.tabGroup=$.index;
function btClick(e) { 
    $.mapView.region = {
        latitude : 22.339468, 
        longitude : 114.181879,
        latitudeDelta : 0.001,
        longitudeDelta : 0.001 
    };
};
function tableClick(e) { 
    
    var eventListController = Alloy.createController('eventList', {dept_id: e.row.dept_id, classtype: e.row.classtype, price: e.row.price, actiontype: e.row.actiontype});
    
    $.index.activeTab.open(eventListController.getView());
};


Alloy.Collections.webNews.fetch();
function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    transform.name = "🤣" + transform.name;

    return transform; 
}


function mapClicked(e) {
    
    if (e.clicksource == 'rightButton' && e.annotation.id == 'acHall') {
            
        console.log("map Clicked");
        alert("map Clicked");
        
    }   
}