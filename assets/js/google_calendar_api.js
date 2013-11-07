function findMonth(number) {
  var month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  return month[number];
}

function fetchDate(date) {
  var month = date.getMonth() + 1;
  return date.getFullYear() + "-" + month + "-" + date.getDate();
} 

function dayAndMonth(date) {
  return date.getDate() + " " + findMonth(date.getMonth());
}

function removeUrlFromStartLine(text) {
  var result = {'title_link' : '', 'main_content' : ''};
  if (text) {
    var exp = /^(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var link = text.match(exp);
    result = {'title_link' : link, 'main_content' : text.replace(exp,'')};
  }
  return result;
}

function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1' target='_blank'>$1</a>"); 
}

function durationEvent(item) {
  var start_date = Date.create(item.start.dateTime || item.start.date);
  var end_date = Date.create(item.end.dateTime || item.end.date);
  var content;

  if (start_date.toDateString() == end_date.toDateString()) {
    content = '';
  }
  else {
    content = "<div style='margin:6px 0 0;'>" + 
                "С " + dayAndMonth(start_date) + " по " + dayAndMonth(end_date) + "." + 
              "</div>"
  }  
  return content;
}

function eventLocation(item) {
  var result = '';
  if (item.location) {
    result = "<dt>" + "Место проведения:" + "</dt>" + 
    "<dd>" + item.location + "</dd>"
  }
  return result;
}

function eventDescription(item) {
    var description = removeUrlFromStartLine(item.description);
    var result = '';
    if (description.title_link.length > 0) {
      result = "<div><strong><a href='"+ description.title_link +"' target='_blank'>" + item.summary + "</a></strong></div>"
    } else {
      result = "<div><strong>" + item.summary + "</strong></div>"
    }
    result += "<div class='event-description'>" + replaceURLWithHTMLLinks(description.main_content) + "</div>"
    return result;
}

function appendResults(events) {
  $.each(events.items, function(i, item){
    var event_time = Date.create(item.start.dateTime || item.start.date);
    var description = removeUrlFromStartLine(item.description);

    content = "<li class='clearfix'>" + 
                "<div class='calendar'>" + 
                  "<time datetime='" + fetchDate(event_time) + "'>" + 
                    "<i class='date'>" + event_time.getDate() + "</i>" + 
                    "<b class='month'>" + findMonth(event_time.getMonth()) + "</b>" + 
                  "</time>" + 
                "</div>" + 
                "<div class='event-desc'>" + 
                  eventDescription(item) +
                  "<dl class='event-author'>" + 
                    eventLocation(item) +
                  "</dl>" + 
                  durationEvent(item) + 
                "</div>" + 
              "</li>"
    $('#_events_').append(content)
  });
}

function getEvents() {
  var now = Date.create();
  var time = now.toISOString();
  var request = gapi.client.calendar.events.list({'calendarId': "aqclsibjm591jbbk875uio9k40@group.calendar.google.com", 'timeMin': time, 'singleEvents': 'True', 'orderBy': 'startTime', 'maxResults': '4'});
  request.execute(function(resp){ appendResults(resp)} );
}

function OnLoadCallback() {
  gapi.client.setApiKey('AIzaSyBQBIEJz1qFc9P_k7rmSV1lufRL6Koo3bg');
  gapi.client.load('calendar', 'v3', getEvents);
}