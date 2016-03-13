function PlayerResource ( $resource ) {
  this.resource = $resource( '/api/player/:id' );
}

PlayerResource.prototype.get = function( id ) {
  return this.resource.get( {id: id} ).$promise;
};

PlayerResource.prototype.query = function() {
  return this.resource.query().$promise;
};