function AddPlayerController( $mdDialog ) {
  this.$mdDialog = $mdDialog;
  this.name = '';
}

AddPlayerController.prototype.cancel = function () {
  this.$mdDialog.cancel();
}

AddPlayerController.prototype.confirm = function ( name ) {
  this.$mdDialog.hide( name );
}