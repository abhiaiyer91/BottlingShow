window.app.factory('Parse', function(parseConstant, Error, $rootScope) {

var inputElement = document.getElementById("input");
var file;
var parseFile;
var jobs = jobHandler();

function jobHandler () {
  var jobsObj = Parse.Object.extend("Jobs");
  var query = new Parse.Query(jobsObj);
  return query.find();
}

function successHandler() {
    $rootScope.upLoading = false;
    Error(null, 'Resume Sent!');
}
function errorHandler(err) {
    $rootScope.upLoading = false;
    Error(err, 'There was an error please try again!');
}
function handleFiles() {
    file = this.files[0];
    parseFile = new Parse.File(file.name, file);
    Error(null, file.name+' added to queue.\nPlease fill out the form and submit.');
}


  return {
    upload: function(){
      inputElement.addEventListener("change", handleFiles, false);
    },
    post: function(data){
      $rootScope.upLoading = true;
      parseFile.save().then(function () {
          var resume = new Parse.Object('Resume');
          resume.set('attachment', parseFile);
          resume.save(data).then(successHandler, errorHandler);
      });
    },
    getJob: function(){
      return jobs;
    }

  };
});
