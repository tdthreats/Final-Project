google.maps.event.addDomListener(window, 'load', initialize);

 function initialize() {
        var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(38.8935965,-77.014576);
          }
        var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

        setMarkers(map, musicSites);
      } 

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var musicSites = [
//dcJazz
    ['Howard Theater', 38.915303, -77.021149, 1, '<b>HOWARD THEATER </b><br><em>602 T St NE</em><br>Historically registered theater founded in 1910 and host to many African-American luminaries of the 20th century.'],
    ['Bohemian Caverns', 38.91716, -77.02684, 4, '<b>BOHEMIAN CAVERNS </b><br><em>2001 11th St NW</em><br>Famous venue known for hosting Charlie Parker, Miles Davis, and John Coltrane. The Ramsey Lewis Trio recorded their hit album <em>The In Crowd  </em>here in May 1965.'],
    ['Duke Ellington\'s House', 38.9143789, -77.029391, 2, '<b>DUKE ELLINGTON\'S HOUSE </b><br><em>1805 13th St NW</em><br>Historically registered home of famous Bandleader and DC\'s most famous musician.'],
    ['All Souls Church', 38.925991, -77.035897, 3, '<b>ALL SOULS UNITARIAN CHURCH </b><br><em>1500 Harvard St NW</em><br>Popular local church and community space. Site of Charlie Byrd and Stan Getz\'s seminal recording <em>Jazz Samba </em>in February 1962.'],
    ['HR57', 38.90032, -76.994177, 5, '<b>HR57 </b><br><em>816 H St NE</em><br>H St. club is a hub for DC jazz musicians.'],
    ['Blues Alley', 38.904708, -77.062649, 6, '<b>BLUES ALLEY </b><br><em>1073 Wisconsin Ave NW</em><br>Popular Georgetown jazz venue.'],
    ['Jungle Inn', 38.917324, -77.0287, 7, '<b>JUNGLE INN </b><br><em>1211 U St NW </em><br>New Orleans pianist and composer Jelly Roll Morton made history in Washington when he took up residency here in 1935. This location is now the site of <b>Ben\'s Next Door</b>.'], 
//dcRock
    ['9:30 Club', 38.917865,-77.023721, 8, '<b>9:30 CLUB</b> <em>15 V St NW </em><br>Previous location of WUST RADIO MUSIC HALL, the club originally opened in 1980 and derives its name from original location at 930 F St NW in downtown Washington.'],
    ['Washington Coliseum', 38.905374,-77.0023779, 9, '<b>WASHINGTON COLISEUM</b><em>1140 3rd St NE</em><br>The Washington Coliseum, formerly the Uline Arena, was the site of the first concert by The Beatles in the United States in 1964. The building is in the NoMa neighborhood near Union Station and is listed on the National Register of Historic Places.<a href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=washington%20coliseum">Sources</a>'],
    ['Madam\'s Organ',],
    ['The Bayou', 38.9025784,-77.0618423, 11,'<b>THE BAYOU</b><br><em>3135 K ST NW</em><br>The club opened in September 1953 on the site of a former Dixieland nightclub called The Pirates Den. The club featured Dixieland jazz until the early 1960\'s when the format changed to rock and roll.'],
//dcRB
    ['Marvin Gaye\'s House', 38.890271,-76.914945, 10, '<b>MARVIN GAYE\'S CHILDHOOD HOME</b><br><em>10 60th St NE, EAST CAPITOL DWELLINGS</em><br>The Gay family moved here in 1954. Long gone now, it’s not far from the Watts Branch Playground, where Gaye first performed publicly onstage, which became Marvin Gaye Park years later.'],
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: 'images/map-marker-2.png',
    // This marker is 20 pixels wide by 20 pixels tall.
    size: new google.maps.Size(20, 20),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the map-marker at 0,30.
    anchor: new google.maps.Point(0, 20)
  };

  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };

  // forEach creates zoom view and infowindow for map markers
  locations.forEach (function (musicSites) {
    var myLatLng = new google.maps.LatLng(musicSites[1], musicSites[2]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      shape: shape,
      title: musicSites[0],
      zIndex: musicSites[3]
    });

      var infowindow = new google.maps.InfoWindow({
    maxWidth: 150, content: musicSites[4]
  });


    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
      infowindow.open(map,marker);
    });

  });
}

google.maps.event.addDomListener(window, 'load', initialize);

