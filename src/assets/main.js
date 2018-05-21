$(function () {
  $.ajax({
    url: 'https://www.codeschool.com/users/MaratGainutdinov.json',
    dataType: 'jsonp',
    success: function (response) {
      $.each(response.courses.completed, function (index, course) {
        $("#badges").append('<div class="course">' + '<h3>' + course.title + '</h3>' +
          '<img src="' + course.badge + '">' + '<a class="btn btn-primary" target="_blank" href="' + course.url + '">See Course</a>' + '</div>');
      });
    }
  });
});