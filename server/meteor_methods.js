Meteor.methods({
  parseFile: function (fileId) {

    var theFile = UploadedFiles.findOne({ _id: fileId });
    
    var theStream = theFile.createReadStream()
      .on('open', function () {
        console.log("openned!!!");
      })
      .on('data', function () {
        console.log("data recieved");
      });

    console.log("done with parseFile meteor method");
  }
});
