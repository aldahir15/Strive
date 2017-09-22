class MarkerUtil {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkets(positions){
    const pathObj = {};
    positions.map(position => {
      pathObj[position.id] = position;
    });
    positions.filter(position => !this.markers[position.id])
    .forEach(newPos => this.createMarkerFromPosition(newPos, this.handleClick));

    Object.keys(this.markers).filter(posId => !pathObj[posId])
    .forEach(posId => this.removeMarker(this.markers[posId]));
  }

  createMarkerFromPosition(position){
    const pos = new google.maps.LatLng(position.lat, position.lng);
    const marker = new google.maps.marker({
      pos,
      map: this.map,
      posId: position.id
    });

    marker.addListener('click', () => this.handleClick(position));
    this.markers[marker.posId] = marker;
  }

  removeMarker(marker){
    this.markers[marker.posId].setMap(null);
    delete this.markers[marker.posId];
  }


}

export default MarkerUtil;
