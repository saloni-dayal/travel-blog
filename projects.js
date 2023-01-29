$(document).ready(function(){
    var url = 'http://127.0.0.1:3008/places';
    $.get(url,function(data,status){
        places=JSON.parse(data);
    console.log(places);
    $("#place").html(places.length);
    for(i=0;i<places.length;i++)
{
    //parent=document.createElement("div")
    //console.log(places[i].src)
    //var tag=document.createElement("div")
    let template=
    '<div class="col-lg-4 col-md-6 portfolio-item filter-construction">'+
    '<div class="portfolio-content h-100">'+
      '<img src='+places[i].src+' class="img-fluid" alt="" width="500" height="500">'+
      '<div class="portfolio-info">'+
        '<h4>'+places[i].name+'</h4>'+
        '<p>'+places[i].data+'</p>'+
        '<a href='+places[i].src+' title="Hill Station 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>'+
        '<a href="#" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>'+
      '</div>'+
    '</div>'+
  '</div>'
    //tag.innerHTML=template
    //parent.append(tag);
    $("#parent").append(template)

    }
});
});
