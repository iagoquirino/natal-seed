'use strict';

/*
    Controller for the feature myfeature1
*/
jd.factory.newController('app.core.mysubmodule.myfeature1.Myfeature1Ctrl', ['jedi.dialogs.AlertHelper', 'toastr', function (alertHelper, toastr) {

    //#region Service initialize
    var service;// = ... e.g: restangular instance
    //#endregion

    //#region View/Model initialize
    var vm = this;
    vm.child = {};
    vm.children = [];
    //#endregion

    //#region Events binds
    vm.save = save;
    vm.remove = remove;
    vm.reset = reset;
    //#endregion


    //#region Events definitions
    function save() {
        vm.children.push(vm.child);
        vm.reset();
        alertHelper.addInfo('message');
    }

    function remove(index){
      vm.children.splice(index,1);
      alertHelper.addInfo('remove_message');
    }

    function reset(){
      vm.child = {};
    }

}]);
