
function gray_nav( tableCellRef, hoverFlag, navStyle ) {
	if ( hoverFlag ) {
		switch ( navStyle ) {
			case 1:
				tableCellRef.style.backgroundColor = '#C8CCCE';
				break;
			default:
//				tableCellRef.style.backgroundColor = '#DBDFE2';
				if ( document.getElementsByTagName ) {
					tableCellRef.getElementsByTagName( 'a' )[0].style.color = '#cc0000';
				}
		}
	} else {
		switch ( navStyle ) {
			case 1:
				tableCellRef.style.backgroundColor = '#DBDFE2';
				break;
			default:
//				tableCellRef.style.backgroundColor = '#DBDFE2';
				if ( document.getElementsByTagName ) {
					tableCellRef.getElementsByTagName( 'a' )[0].style.color = '#000000';
				}
		}
	}
}



function red_nav( tableCellRef, hoverFlag, navStyle ) {
	if ( hoverFlag ) {
		switch ( navStyle ) {
			case 1:
				tableCellRef.style.backgroundColor = '#800001';
				break;
			default:
//				tableCellRef.style.backgroundColor = '#CC0204';
				if ( document.getElementsByTagName ) {
					tableCellRef.getElementsByTagName( 'a' )[0].style.color = '#cc0000';
				}
		}
	} else {
		switch ( navStyle ) {
			case 1:
				tableCellRef.style.backgroundColor = '#CC0204';
				break;
			default:
//				tableCellRef.style.backgroundColor = '#CC0204';
				if ( document.getElementsByTagName ) {
					tableCellRef.getElementsByTagName( 'a' )[0].style.color = '#000000';
				}
		}
	}
}


function go(link)
       {
              location.href = link
       }